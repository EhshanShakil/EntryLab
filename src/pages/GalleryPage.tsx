import { useState, useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';
import { memories, categories, type Memory } from '../data/memories';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const observerRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === 'All'
    ? memories
    : memories.filter((m) => m.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Lazy loading via intersection observer
  const loadMore = useCallback(() => {
    if (hasMore) {
      setVisibleCount((prev) => Math.min(prev + 4, filtered.length));
    }
  }, [hasMore, filtered.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { threshold: 0.1 }
    );
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [loadMore]);

  useEffect(() => {
    setVisibleCount(8);
  }, [activeCategory]);

  // Lightbox navigation
  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!selectedMemory) return;
    const idx = filtered.findIndex((m) => m.id === selectedMemory.id);
    if (direction === 'prev' && idx > 0) setSelectedMemory(filtered[idx - 1]);
    if (direction === 'next' && idx < filtered.length - 1) setSelectedMemory(filtered[idx + 1]);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedMemory(null);
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
      if (e.key === 'ArrowRight') navigateLightbox('next');
    };
    if (selectedMemory) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKey);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [selectedMemory]);

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-400 font-medium text-sm tracking-wider uppercase mb-3">
            Our Journey
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display">
            Memory{' '}
            <span className="gradient-text">Gallery</span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            Every milestone, celebration, and achievement that defines the EntryLab family. These moments are what drive us forward.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 sm:top-20 z-30 py-4 bg-slate-950/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/20'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {visible.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No memories found in this category yet.</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {visible.map((memory, i) => (
                <div
                  key={memory.id}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setSelectedMemory(memory)}
                  style={{ animationDelay: `${(i % 4) * 100}ms` }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-slate-800 animate-fade-in">
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      style={{
                        aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '4/3' : '1/1',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-white font-semibold text-sm">{memory.title}</h3>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-xs text-primary-300 bg-primary-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {memory.category}
                        </span>
                        <span className="text-xs text-white/50 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {memory.date}
                        </span>
                      </div>
                    </div>
                    {memory.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="text-xs bg-warm-500 text-white px-2 py-1 rounded-lg font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Lazy load trigger */}
          {hasMore && (
            <div ref={observerRef} className="flex justify-center py-12">
              <div className="flex items-center gap-2 text-slate-500">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-sm">Loading more memories...</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedMemory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedMemory(null)}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedMemory(null)}
              className="absolute -top-12 right-0 p-2 text-white/60 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-800">
              <img
                src={selectedMemory.image}
                alt={selectedMemory.title}
                className="w-full max-h-[70vh] object-contain"
              />

              {/* Nav arrows */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold">{selectedMemory.title}</h3>
              <p className="text-slate-400 text-sm mt-1">{selectedMemory.description}</p>
              <div className="flex items-center justify-center gap-3 mt-3">
                <span className="text-xs text-primary-300 bg-primary-500/20 px-3 py-1 rounded-full">
                  {selectedMemory.category}
                </span>
                <span className="text-xs text-slate-500">{selectedMemory.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
