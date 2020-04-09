let MasonGrid = {
  template: `
    <div v-masonry class="grid" column-width=".size" gutter=".gutter" item-selector=".grid-item">
      <div class="size"></div>
      <div class="gutter"></div>
      <slot></slot>
    </div>
  `
}

let MasonGridItem = {
  template: `
    <div class="grid-item" v-masonry-tile>
      <slot></slot>
    </div>
  `
}
