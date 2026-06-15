import { memo, useCallback, useMemo, useRef, useState } from 'react';
import type { UIEvent } from 'react';
import type { Country } from '../../types';
import { CountryCard } from '../country-card/country-card';
import { getPopulationForYear, createYearDataMap } from '../../utils/data-transformers';

import styles from './country-list.module.css';

type CountryListProps = {
  countries: Country[];
  searchQuery: string;
  selectedColumns: string[];
  selectedRegion: string;
  selectedYear: number;
  sortField: 'name' | 'population';
  sortOrder: 'asc' | 'desc';
};

const VIRTUAL_LIST_HEIGHT = 700;
const BASE_CARD_HEIGHT = 150;
const TABLE_ROW_HEIGHT = 38;
const OVERSCAN_COUNT = 5;

export const CountryList = memo(
  ({
    countries,
    searchQuery,
    selectedColumns,
    selectedRegion,
    selectedYear,
    sortField,
    sortOrder,
  }: CountryListProps) => {
    const listRef = useRef<HTMLDivElement | null>(null);
    const [scrollTop, setScrollTop] = useState(0);

    const filteredCountries = useMemo(() => {
      const normalizedSearchQuery = searchQuery.toLowerCase();

      return countries
        .filter((country) => {
          const matchesSearch = country.id.toLowerCase().includes(normalizedSearchQuery);
          const matchesRegion =
            !selectedRegion || country.data.some((yearData) => yearData.region === selectedRegion);

          return matchesSearch && matchesRegion;
        })
        .sort((firstCountry, secondCountry) => {
          if (sortField === 'name') {
            return sortOrder === 'asc'
              ? firstCountry.id.localeCompare(secondCountry.id)
              : secondCountry.id.localeCompare(firstCountry.id);
          }

          const firstPopulation =
            getPopulationForYear(createYearDataMap(firstCountry.data), selectedYear) ?? 0;

          const secondPopulation =
            getPopulationForYear(createYearDataMap(secondCountry.data), selectedYear) ?? 0;

          return sortOrder === 'asc'
            ? firstPopulation - secondPopulation
            : secondPopulation - firstPopulation;
        });
    }, [countries, searchQuery, selectedRegion, selectedYear, sortField, sortOrder]);

    const itemHeight = useMemo(() => {
      return BASE_CARD_HEIGHT + selectedColumns.length * TABLE_ROW_HEIGHT;
    }, [selectedColumns.length]);

    const totalHeight = filteredCountries.length * itemHeight;

    const visibleRange = useMemo(() => {
      const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - OVERSCAN_COUNT);

      const visibleCount = Math.ceil(VIRTUAL_LIST_HEIGHT / itemHeight);

      const endIndex = Math.min(
        filteredCountries.length,
        startIndex + visibleCount + OVERSCAN_COUNT * 2
      );

      return {
        startIndex,
        endIndex,
      };
    }, [filteredCountries.length, itemHeight, scrollTop]);

    const visibleCountries = useMemo(() => {
      return filteredCountries.slice(visibleRange.startIndex, visibleRange.endIndex);
    }, [filteredCountries, visibleRange.endIndex, visibleRange.startIndex]);

    const handleScroll = useCallback((event: UIEvent<HTMLDivElement>) => {
      setScrollTop(event.currentTarget.scrollTop);
    }, []);

    if (filteredCountries.length === 0) {
      return <div className={styles.noResults}>No countries found.</div>;
    }

    return (
      <div ref={listRef} className={styles.countryList} onScroll={handleScroll}>
        <div className={styles.virtualSpacer} style={{ height: totalHeight }}>
          {visibleCountries.map((country, index) => {
            const realIndex = visibleRange.startIndex + index;

            return (
              <div
                key={country.id}
                className={styles.virtualItem}
                style={{
                  height: itemHeight,
                  transform: `translateY(${realIndex * itemHeight}px)`,
                }}
              >
                <CountryCard
                  country={country}
                  selectedYear={selectedYear}
                  selectedColumns={selectedColumns}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CountryList.displayName = 'CountryList';
