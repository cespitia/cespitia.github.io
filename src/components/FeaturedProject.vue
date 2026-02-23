<script setup lang="ts">
type FeaturedLink = { label: string; url: string };

defineProps<{
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  links: FeaturedLink[];
}>();
</script>

<template>
  <section class="featured">
    <div class="left">
      <div class="top">
        <div>
          <h2 class="title">{{ title }}</h2>
          <p class="subtitle">{{ subtitle }}</p>
        </div>
        <span class="badge">Showcase</span>
      </div>

      <p class="desc">{{ description }}</p>

      <div class="tags">
        <span v-for="t in tags" :key="t" class="tag">{{ t }}</span>
      </div>
    </div>

    <div class="right">
      <div class="links">
        <a
          v-for="l in links"
          :key="l.url"
          class="link"
          :href="l.url"
          target="_blank"
          rel="noreferrer"
        >
          {{ l.label }}
        </a>
      </div>

      <div class="placeholder">
        <div class="phTitle">TransitHQ</div>
        <div class="phSub">Add screenshot or demo GIF later</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured{
  border:1px solid rgba(255,255,255,0.16);
  background: rgba(255,255,255,0.05);
  border-radius:18px;
  padding:18px;
  display:grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap:16px;
}

@media (max-width: 820px){
  .featured{
    grid-template-columns: 1fr;
  }
}

.top{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:12px;
}

.title{
  margin:0;
  font-size:20px;
}

.subtitle{
  margin:4px 0 0;
  opacity:0.8;
  font-size:13px;
}

.badge{
  font-size:12px;
  padding:4px 10px;
  border-radius:999px;
  border:1px solid rgba(140,180,255,0.35);
  background: rgba(140,180,255,0.12);
  white-space: nowrap;
}

.desc{
  margin:10px 0 0;
  line-height:1.6;
  opacity:0.92;
}

.tags{
  margin-top:12px;
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}

.tag{
  display:inline-flex;
  align-items:center;
  padding:4px 10px;
  border:1px solid rgba(255,255,255,0.18);
  border-radius:999px;
  font-size:12px;
  background: rgba(255,255,255,0.06);
  white-space: nowrap;
}

.right{
  display:flex;
  flex-direction:column;
  gap:12px;
}

.links{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  justify-content:flex-end;
}

.link{
  display:inline-flex;
  align-items:center;
  padding:8px 12px;
  border-radius:10px;
  border:1px solid rgba(255,255,255,0.14);
  text-decoration:none;
  color: inherit;
  background: rgba(255,255,255,0.05);
}
.link:hover{
  background: rgba(255,255,255,0.09);
}

.placeholder{
  border-radius:14px;
  border:1px dashed rgba(255,255,255,0.22);
  background: rgba(0,0,0,0.12);
  min-height:120px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:6px;
  text-align:center;
  padding:14px;
}
.phTitle{
  font-weight:600;
}
.phSub{
  font-size:12px;
  opacity:0.75;
}
</style>