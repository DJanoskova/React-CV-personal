import { treemap, hierarchy, treemapSquarify } from 'd3';

export const generateTreemap = data => {
  // children.forEach(instance => {
  //   if (instance.children) instance.children = JSON.parse(instance.children)
  //   instance.children = instance.skills
  //   delete instance.skills
  // });

  const treemapLayout = treemap()
    .size([673, 160])
    .paddingInner(5)
    .paddingOuter(5)
    .paddingTop(20)
    .tile(treemapSquarify.ratio(1.5));

  const root = hierarchy({ name: '', children: JSON.parse(data.content) });

  root.sum(d => d.value);

  const nodes = treemapLayout(root).descendants();
  delete nodes[0];
  return nodes;
};