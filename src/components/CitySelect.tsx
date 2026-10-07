'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { PORTUGAL_CITIES } from '@/config/siteConfig';

export interface CitySelectProps {
  value: string;
  onChange: (city: string) => void;
  theme?: 'dark' | 'light';
  placeholder?: string;
  isRTL?: boolean;
  required?: boolean;
  id?: string;
  name?: string;
}

export function CitySelect({
  value,
  onChange,
  theme = 'dark',
  placeholder = 'Select a city',
  isRTL = false,
  required = false,
  id = 'city-select',
  name = 'city',
}: CitySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const isDark = theme === 'dark';

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      return;
    }

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        const currentIdx = PORTUGAL_CITIES.indexOf(value as any);
        setHighlightedIndex(currentIdx >= 0 ? currentIdx : 0);
      } else {
        if (highlightedIndex >= 0 && highlightedIndex < PORTUGAL_CITIES.length) {
          onChange(PORTUGAL_CITIES[highlightedIndex]);
          setIsOpen(false);
        }
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setHighlightedIndex(0);
      } else {
        setHighlightedIndex((prev) => {
          const next = prev < PORTUGAL_CITIES.length - 1 ? prev + 1 : 0;
          scrollIndexIntoView(next);
          return next;
        });
      }
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setHighlightedIndex(PORTUGAL_CITIES.length - 1);
      } else {
        setHighlightedIndex((prev) => {
          const next = prev > 0 ? prev - 1 : PORTUGAL_CITIES.length - 1;
          scrollIndexIntoView(next);
          return next;
        });
      }
      return;
    }

    if (e.key === 'Tab') {
      setIsOpen(false);
    }
  };

  const scrollIndexIntoView = (index: number) => {
    if (!listRef.current) return;
    const item = listRef.current.children[index] as HTMLElement;
    if (item) {
      item.scrollIntoView({ block: 'nearest' });
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Hidden input for HTML form validation */}
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        required={required}
        onChange={() => {}}
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
      />

      {/* Mobile Native Select Overlay for accessibility and native mobile keyboard/wheel */}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block sm:hidden absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
        aria-label={placeholder}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {PORTUGAL_CITIES.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      {/* Styled Trigger Button */}
      <button
        type="button"
        onClick={() => {
          if (typeof window !== 'undefined' && window.innerWidth < 640) {
            return;
          }
          const next = !isOpen;
          setIsOpen(next);
          if (next) {
            const currentIdx = PORTUGAL_CITIES.indexOf(value as any);
            setHighlightedIndex(currentIdx >= 0 ? currentIdx : 0);
          }
        }}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs rounded-xl transition-all duration-200 focus:outline-none ${
          isDark
            ? 'bg-forest-950/80 border border-forest-700 text-white focus:border-emeraldGreen-400'
            : 'bg-cream-50 border border-cream-300 text-darkTxt focus:border-emeraldGreen-500'
        } ${isOpen ? (isDark ? 'border-emeraldGreen-400 ring-1 ring-emeraldGreen-400/30' : 'border-emeraldGreen-500 ring-1 ring-emeraldGreen-500/30') : ''}`}
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        <span
          className={`truncate ${isRTL ? 'text-right' : 'text-left'} ${
            value
              ? isDark
                ? 'text-white font-medium'
                : 'text-darkTxt font-medium'
              : isDark
              ? 'text-white/40'
              : 'text-darkTxt/40'
          }`}
        >
          {value || placeholder}
        </span>

        <ChevronDown
          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          } ${isDark ? 'text-emeraldGreen-400' : 'text-emeraldGreen-600'} ${
            isRTL ? 'me-1' : 'ms-1'
          }`}
        />
      </button>

      {/* Custom Desktop Dropdown Menu */}
      {isOpen && (
        <div
          className={`hidden sm:block absolute start-0 end-0 mt-1.5 rounded-xl shadow-2xl z-[70] overflow-hidden ${
            isDark
              ? 'bg-[#071a13] border border-forest-700 text-white'
              : 'bg-white border border-cream-300 text-darkTxt'
          }`}
          style={{ direction: isRTL ? 'rtl' : 'ltr' }}
        >
          <ul
            ref={listRef}
            role="listbox"
            tabIndex={-1}
            className="max-h-[280px] overflow-y-auto py-1 text-xs divide-y divide-white/5 scrollbar-thin"
          >
            {/* Disabled Placeholder as first option */}
            <li
              className={`px-3.5 py-2 text-[11px] uppercase tracking-wider font-semibold cursor-default select-none ${isRTL ? 'text-right' : 'text-left'} ${
                isDark ? 'text-white/30 bg-forest-950/60' : 'text-darkTxt/30 bg-cream-100/60'
              }`}
              role="option"
              aria-selected={false}
              aria-disabled={true}
            >
              {placeholder}
            </li>

            {PORTUGAL_CITIES.map((city, idx) => {
              const isSelected = value === city;
              const isHighlighted = highlightedIndex === idx;

              return (
                <li
                  key={city}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setHighlightedIndex(idx)}
                  onClick={() => {
                    onChange(city);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between px-3.5 py-2.5 cursor-pointer transition-colors ${
                    isSelected
                      ? isDark
                        ? 'bg-emeraldGreen-500/20 text-emeraldGreen-400 font-semibold'
                        : 'bg-emeraldGreen-50 text-emeraldGreen-700 font-semibold'
                      : isHighlighted
                      ? isDark
                        ? 'bg-forest-800/70 text-emeraldGreen-300'
                        : 'bg-cream-100 text-emeraldGreen-700'
                      : isDark
                      ? 'text-white/90 hover:bg-forest-800/40'
                      : 'text-darkTxt hover:bg-cream-50'
                  }`}
                >
                  <span className={`truncate ${isRTL ? 'text-right' : 'text-left'}`}>{city}</span>
                  {isSelected && (
                    <Check
                      className={`w-3.5 h-3.5 shrink-0 ${
                        isDark ? 'text-emeraldGreen-400' : 'text-emeraldGreen-600'
                      }`}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
