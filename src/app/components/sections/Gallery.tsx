"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import { useLanguage } from "../ui/LanguageProvider";

export default function Gallery() {
  const { t } = useLanguage();
  const [activeItem, setActiveItem] = useState<
    null | (typeof t.gallery.items)[number]
  >(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const lastOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (activeItem) {
      setZoom(1);
      setOffset({ x: 0, y: 0 });
      lastOffset.current = { x: 0, y: 0 };
    }
  }, [activeItem]);

  const handleZoomIn = () => setZoom((prev) => Math.min(2.5, prev + 0.25));
  const handleZoomOut = () => setZoom((prev) => Math.max(1, prev - 0.25));

  const getScrollStep = () => {
    const list = listRef.current;
    if (!list) {
      return 360;
    }
    const firstItem = list.querySelector<HTMLElement>("article");
    if (!firstItem) {
      return 360;
    }
    const gap = 40;
    return firstItem.getBoundingClientRect().width + gap;
  };

  const handlePrev = () => {
    const list = listRef.current;
    if (!list) {
      return;
    }
    list.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
  };

  const handleNext = () => {
    const list = listRef.current;
    if (!list) {
      return;
    }
    list.scrollBy({ left: getScrollStep(), behavior: "smooth" });
  };

  const clampOffset = (nextOffset: { x: number; y: number }) => {
    const container = containerRef.current;
    if (!container) {
      return nextOffset;
    }
    const { width, height } = container.getBoundingClientRect();
    const maxX = Math.max(0, (width * (zoom - 1)) / 2);
    const maxY = Math.max(0, (height * (zoom - 1)) / 2);
    return {
      x: Math.min(maxX, Math.max(-maxX, nextOffset.x)),
      y: Math.min(maxY, Math.max(-maxY, nextOffset.y)),
    };
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (zoom <= 1) {
      return;
    }
    isDragging.current = true;
    dragStart.current = { x: event.clientX, y: event.clientY };
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || zoom <= 1) {
      return;
    }
    const dx = event.clientX - dragStart.current.x;
    const dy = event.clientY - dragStart.current.y;
    const dragFactor = 0.25;
    const maxStep = 28;
    const nextOffset = clampOffset({
      x:
        lastOffset.current.x +
        Math.max(-maxStep, Math.min(maxStep, dx * dragFactor)),
      y:
        lastOffset.current.y +
        Math.max(-maxStep, Math.min(maxStep, dy * dragFactor)),
    });
    lastOffset.current = nextOffset;
    setOffset(nextOffset);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) {
      return;
    }
    isDragging.current = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  useLayoutEffect(() => {
    if (!activeItem) {
      return;
    }
    setOffset((prev) => {
      const clamped = clampOffset(prev);
      lastOffset.current = clamped;
      return clamped;
    });
  }, [zoom, activeItem]);

  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="space-y-4">
            <SectionTitle title={t.gallery.title} />
            <p className="text-sm text-[color:var(--text-muted)]">
              {t.gallery.counter}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text-muted)] transition hover:border-[color:var(--border-strong)] hover:text-[color:var(--text)]"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text-muted)] transition hover:border-[color:var(--border-strong)] hover:text-[color:var(--text)]"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
        <div
          ref={listRef}
          className="mt-10 flex gap-10 overflow-x-auto pb-6"
        >
          {t.gallery.items.map((item) => (
            <article key={item.title} className="w-[340px] shrink-0">
              <div className="border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
                <button
                  type="button"
                  onClick={() => setActiveItem(item)}
                  className="relative aspect-[4/3] w-full overflow-hidden"
                  aria-label={`Open ${item.title}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="340px"
                    className="h-full w-full object-cover object-top"
                  />
                </button>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[color:var(--text)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">
                {item.description}
              </p>
              {t.gallery.cta ? (
                <button
                  type="button"
                  className="mt-3 text-sm font-semibold text-[color:var(--text-muted)]"
                >
                  {t.gallery.cta}
                </button>
              ) : null}
            </article>
          ))}
        </div>
      </div>
      {activeItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface-strong)] text-[color:var(--text)] shadow-[0_10px_30px_var(--shadow-soft)] transition hover:bg-[color:var(--surface)]"
              aria-label="Close image"
            >
              ✕
            </button>
            <div className="absolute left-3 top-3 z-10 flex items-center gap-2">
              <button
                type="button"
                onClick={handleZoomOut}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface-strong)] text-[color:var(--text)] shadow-[0_10px_30px_var(--shadow-soft)] transition hover:bg-[color:var(--surface)] disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Zoom out"
                disabled={zoom <= 1}
              >
                −
              </button>
              <button
                type="button"
                onClick={handleZoomIn}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[color:var(--surface-strong)] text-[color:var(--text)] shadow-[0_10px_30px_var(--shadow-soft)] transition hover:bg-[color:var(--surface)] disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Zoom in"
                disabled={zoom >= 2.5}
              >
                +
              </button>
            </div>
            <div
              ref={containerRef}
              className="relative h-[70vh] w-full overflow-hidden"
            >
              <div
                className={`absolute inset-0 ${
                  zoom > 1 ? "cursor-grab active:cursor-grabbing" : ""
                }`}
                style={{
                  transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                  transformOrigin: "center",
                  touchAction: zoom > 1 ? "none" : "auto",
                }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                onPointerCancel={handlePointerUp}
              >
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  sizes="(min-width: 1024px) 900px, 90vw"
                  className="h-full w-full object-contain transition-transform duration-200 pointer-events-none"
                  priority
                />
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-base font-semibold text-[color:var(--text)]">
                {activeItem.title}
              </p>
              <p className="text-sm text-[color:var(--text-muted)]">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
