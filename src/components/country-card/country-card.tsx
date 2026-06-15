import { memo } from 'react';
import type { CountryWithYearMap } from '../country-list/country-list';
import { DataTable } from '../data-table/data-table';
import { getPopulationForYear, getCo2ForYear } from '../../utils/data-transformers';
import { formatNumber } from '../../utils/format-utils';

import styles from './country-card.module.css';

type CountryCardProps = {
  country: CountryWithYearMap;
  selectedYear: number;
  selectedColumns: string[];
};

export const CountryCard = memo(({ country, selectedYear, selectedColumns }: CountryCardProps) => {
  const population = getPopulationForYear(country.yearDataMap, selectedYear);
  const co2 = getCo2ForYear(country.yearDataMap, selectedYear);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{country.id}</h3>
        {country.iso_code && <span className={styles.isoCode}>{country.iso_code}</span>}
      </div>

      <div className={styles.stats}>
        <div>
          Population ({selectedYear}): {formatNumber(population)}
        </div>
        <div>
          CO₂ Emissions ({selectedYear}): {formatNumber(co2)} tonnes
        </div>
      </div>

      <DataTable
        record={country.yearDataMap.get(selectedYear)}
        year={selectedYear}
        columns={selectedColumns}
      />
    </div>
  );
});

CountryCard.displayName = 'CountryCard';
