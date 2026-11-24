# DataVisualisation

An interaction design prototype exploring Swiss glaciers through geography, scientific visualization and time.

Current prototype
Two overlapping views, animated focus switching, Aletsch selection, limited search, dataset filter and vertical timeline. Geographical shapes are illustrative; see the real historical data excerpt below. No real scientific reconstruction yet.

Geography: `js/geography.js`, `assets/maps/`, `assets/images/`.
Scientific visualization: `js/visualization.js`, `data/`, `assets/models/`.
Shared interface: `css/`, `index.html`, `js/state.js`, `js/timeline.js`, `js/search.js`.
Work on separate branches and merge through pull requests. Agree on changes to shared state first.
Next steps
Import verified GLAMOS data with source, units and measurement dates; replace schematic maps with geographic data; add actual charts and terrain where supported; synchronize available years by glacier and dataset. Consider D3.js and Three.js when needed. Keep ice-core data separate from other measurement types.
Version 0.1 data update
`data/glaciers.json` contains 16 actual annual terminus-length changes for Grosser Aletschgletscher (1900–1915), transcribed from the GLAMOS historical archive. The chart uses metres, negative values indicate retreat. This is an excerpt, not the complete record. Grey years mean not included in this starter, not necessarily unmeasured. The map and landscape remain schematic placeholders and do not change historically. Other datasets are disabled until imported. The national view displays an explicitly labelled Aletsch example, not a national aggregate.
