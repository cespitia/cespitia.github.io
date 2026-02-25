<script setup lang="ts">
type FeaturedLink = { label: string; url: string };

defineProps<{
  title: string;
  subtitle: string;
  description: string;

  bullets: string[];
  stack: string[];

  architectureTitle: string;
  architectureLine: string;

  links: FeaturedLink[];

  // Optional: if you later add a screenshot image URL
  imageUrl?: string;
}>();
</script>

<template>
  <section class="featured">
    <div class="left">
      <header class="head">
        <div class="titles">
          <h2 class="title">{{ title }}</h2>
          <p class="subtitle">{{ subtitle }}</p>
        </div>
        <span class="badge">Showcase</span>
      </header>

      <p class="desc">{{ description }}</p>

      <div class="chips">
        <span v-for="t in stack" :key="t" class="chip">{{ t }}</span>
      </div>

      <div class="blocks">
        <div class="block">
          <div class="blockTitle">{{ architectureTitle }}</div>
          <div class="archLine">{{ architectureLine }}</div>
        </div>

        <div class="block">
          <div class="blockTitle">What it delivers</div>
          <ul class="bullets">
            <li v-for="b in bullets" :key="b">{{ b }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="right">
      <div class="media">
        <img v-if="imageUrl" class="img" :src="imageUrl" :alt="title" />
        <div v-else class="imgPlaceholder">
          <div class="phTitle">TransitHQ</div>
          <div class="phSub">Drop in a screenshot when ready</div>
          <div class="phHint">Recommended: 1200×700 PNG</div>
        </div>
      </div>

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
    </div>
  </section>
</template>

<style scoped>
.featured{
  border:1px solid rgba(255,255,255,0.16);
  background:
    radial-gradient(
      900px 500px at 15% 0%,
      rgba(var(--accent-rgb),0.20),
      transparent 55%
    ),
    rgba(255,255,255,0.05);
  border-radius:18px;
  padding:18px;
}

@media (max-width: 920px){
  .featured{ grid-template-columns: 1fr; }
}

.head{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:12px;
}

.title{ margin:0; font-size:22px; letter-spacing:-0.01em; }
.subtitle{ margin:4px 0 0; opacity:0.82; font-size:13px; }

.badge{
  font-size:12px;
  padding:4px 10px;
  border-radius:999px;
  border:1px solid rgba(140,180,255,0.35);
  background: rgba(140,180,255,0.12);
  white-space: nowrap;
}

.desc{
  margin:12px 0 0;
  line-height:1.65;
  opacity:0.92;
}

.chips{
  margin-top:12px;
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}

.chip{
  display:inline-flex;
  align-items:center;
  padding:4px 10px;
  border:1px solid rgba(255,255,255,0.18);
  border-radius:999px;
  font-size:12px;
  background: rgba(255,255,255,0.06);
  white-space: nowrap;
}

.blocks{
  margin-top:14px;
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:12px;
}

@media (max-width: 920px){
  .blocks{ grid-template-columns: 1fr; }
}

.block{
  border:1px solid rgba(255,255,255,0.10);
  background: rgba(0,0,0,0.14);
  border-radius:14px;
  padding:12px;
}

.blockTitle{
  font-size:12px;
  opacity:0.75;
  margin-bottom:8px;
}

.archLine{
  font-size:13px;
  line-height:1.5;
  opacity:0.95;
}

.bullets{
  margin:0;
  padding-left:18px;
  display:flex;
  flex-direction:column;
  gap:6px;
}

.right{
  display:flex;
  flex-direction:column;
  gap:12px;
}

.media{
  border-radius:14px;
  overflow:hidden;
  border:1px solid rgba(255,255,255,0.14);
  background: rgba(0,0,0,0.12);
  min-height:170px;
  margin-top: 15px;
}

.img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}

.imgPlaceholder{
  min-height:170px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:6px;
  text-align:center;
  padding:14px;
}

.phTitle{ font-weight:650; }
.phSub{ font-size:12px; opacity:0.78; }
.phHint{ font-size:11px; opacity:0.60; }

.links{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  justify-content:flex-end;
}

.link{
  display:inline-flex;
  align-items:center;
  padding:10px 12px;
  border-radius:12px;
  border:1px solid rgba(255,255,255,0.14);
  text-decoration:none;
  color: inherit;
  background: rgba(255,255,255,0.06);
  font-size:13px;
}
.link:hover{ background: rgba(255,255,255,0.10); }
</style>