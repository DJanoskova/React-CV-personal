import { treemap, hierarchy, treemapBinary } from 'd3';

export const generateTreemap = data => {
  const treemapLayout = treemap()
    .size([673, 220])
    .tile(treemapBinary);

  const root = hierarchy(data);

  root.sum(d => d.value);

  const nodes = treemapLayout(root).descendants();
  delete nodes[0];
  return nodes;
};