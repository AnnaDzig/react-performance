import { useMemo } from 'react';
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

export const CountryList = ({
  countries,
  searchQuery,
  selectedColumns,
  selectedRegion,
  selectedYear,
  sortField,
  sortOrder,
}: CountryListProps) => {
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

  return (
    <div className={styles.countryList}>
      {filteredCountries.map((country) => (
        <CountryCard
          key={country.id}
          country={country}
          selectedYear={selectedYear}
          selectedColumns={selectedColumns}
        />
      ))}
    </div>
  );
};
