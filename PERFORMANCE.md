# PERFORMANCE.md

# React Performance Optimization Report

## Project

CO₂ Emissions Data Explorer

## Branch

`performance`

## Goal

The goal of this task is to profile the intentionally unoptimized React application, identify rendering bottlenecks, apply performance optimizations, and compare the results before and after the changes.

The application was profiled with **React DevTools Profiler** in development mode.

---

# Phase 1: Initial Profiling Baseline

## Profiling setup

The following user interactions were recorded:

1. Sorting countries
2. Searching for a country
3. Selecting a different year
4. Toggling columns

For each interaction, the React DevTools Profiler was used to capture:

- Commit duration
- Render duration
- Flamegraph screenshot
- Main components that re-rendered

---

## Baseline results

| Interaction                | Commit time | Render duration | Main components rendered                                              |
| -------------------------- | ----------: | --------------: | --------------------------------------------------------------------- |
| Sorting countries          |        3.3s |         122.2ms | App, CountryList, YearSelector, many CountryCard/DataTable components |
| Searching for a country    |        6.7s |           101ms | App, CountryList, many CountryCard/DataTable components               |
| Selecting a different year |        3.9s |         120.8ms | App, YearSelector, CountryList, many CountryCard/DataTable components |
| Toggling columns           |        1.6s |         114.7ms | App, YearSelector, CountryList, many CountryCard/DataTable components |

---

## 1. Sorting countries

![Baseline sorting countries](./screenshots/baseline-sorting-countries.png)

### Result

- Commit time: **3.3s**
- Render duration: **122.2ms**

### Observation

Sorting caused the `App` component to update, which then caused `CountryList`, `YearSelector`, and many country rows/cards to render again.

The expensive part is inside `CountryList`, where countries are filtered and sorted directly during render. Population sorting is especially expensive because every comparison creates new year data maps using `createYearDataMap`.

### Bottleneck

The filtered and sorted countries are recalculated on every render, even when unrelated state changes occur.

---

## 2. Searching for a country

![Baseline searching country](./screenshots/baseline-searching-country.png)

### Result

- Commit time: **6.7s**
- Render duration: **101ms**

### Observation

Typing into the search field updates the `App` state. This causes the whole component tree under `App` to render again.

The profiler shows that `CountryList` takes a large part of the render work because filtering is performed on every keystroke and all visible country cards are rendered again.

### Bottleneck

Search filtering is recalculated immediately during render, and the country list is not virtualized.

---

## 3. Selecting a different year

![Baseline selecting year](./screenshots/baseline-selecting-year.png)

### Result

- Commit time: **3.9s**
- Render duration: **120.8ms**

### Observation

Changing the selected year causes `App`, `YearSelector`, `CountryList`, and many country cards to render.

Each `CountryCard` creates a new year data map during render. `DataTable` also filters the country data array to find the selected year.

### Bottleneck

Year-based values are recalculated for many countries on every year change.

---

## 4. Toggling columns

![Baseline toggling columns](./screenshots/baseline-toggling-columns.png)

### Result

- Commit time: **1.6s**
- Render duration: **114.7ms**

### Observation

Toggling columns changes `selectedColumns` in the main `App` state. This causes the country list and data tables to render again.

The modal itself is small, but changing selected columns affects every country card because every `DataTable` receives a new list of columns.

### Bottleneck

Every rendered country card updates when columns change, and the full country list is rendered without virtualization.

---

# Baseline summary

The initial profiling shows several performance problems:

1. Expensive calculations are done directly inside render.
2. The country list is fully rendered without virtualization.
3. Event handlers are recreated on every render.
4. Components are not memoized.
5. Some list keys use array indexes instead of stable identifiers.
6. `CountryCard` and `DataTable` repeat year-based calculations many times.

---

# Planned optimizations

The following optimizations will be applied:

1. Use `useMemo` for computed values:
   - Available years
   - Available columns
   - Filtered and sorted countries
   - Year data maps
   - Selected year records

2. Use `useCallback` for event handlers:
   - Search handler
   - Year change handler
   - Sort handlers
   - Column toggle handler
   - Modal toggle handler

3. Use `React.memo`:
   - `SearchBar`
   - `YearSelector`
   - `ColumnModal`
   - `CountryList`
   - `CountryCard`
   - `DataTable`

4. Use stable keys:
   - `country.id` instead of array index
   - `column` instead of array index

5. Add virtualization for the large country list.

---

# Phase 2: Optimizations

This section will be updated after each optimization step.

---

# Phase 3: Final profiling comparison

This section will be completed after all optimizations are implemented and the same interactions are profiled again.

| Interaction                | Baseline render | Optimized render | Improvement |
| -------------------------- | --------------: | ---------------: | ----------: |
| Sorting countries          |         122.2ms |              TBD |         TBD |
| Searching for a country    |           101ms |              TBD |         TBD |
| Selecting a different year |         120.8ms |              TBD |         TBD |
| Toggling columns           |         114.7ms |              TBD |         TBD |
