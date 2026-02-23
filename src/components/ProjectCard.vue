<script setup lang="ts">
import type { Project } from "../data/projects";
import TagPill from "./TagPill.vue";

defineProps<{ project: Project }>();
</script>

<template>
  <article class="card">
    <header class="top">
      <div>
        <h3 class="title">{{ project.title }}</h3>
        <p class="subtitle">{{ project.subtitle }}</p>
      </div>
      <span class="status" :data-status="project.status">{{ project.status }}</span>
    </header>

    <p class="oneLiner">{{ project.oneLiner }}</p>

    <div class="tags">
      <TagPill v-for="t in project.tags" :key="t" :text="t" />
    </div>

    <div class="meta">
      <div class="metaRow">
        <span class="metaLabel">Architecture</span>
        <span class="metaValue">{{ project.architecture }}</span>
      </div>
      <div class="metaRow">
        <span class="metaLabel">Deployment</span>
        <span class="metaValue">{{ project.deployment }}</span>
      </div>
    </div>

    <ul class="highlights">
      <li v-for="h in project.highlights" :key="h">{{ h }}</li>
    </ul>

    <div class="links">
      <a
        v-for="l in project.links"
        :key="l.url"
        class="link"
        :href="l.url"
        target="_blank"
        rel="noreferrer"
      >
        {{ l.label }}
      </a>
    </div>
  </article>
</template>

<style scoped>
.card{
  border:1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.04);
  border-radius:16px;
  padding:18px;
  display:flex;
  flex-direction:column;
  gap:12px;
  transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease;
}

.card:hover{
  transform: translateY(-3px);
  border-color: rgba(255,255,255,0.22);
  background: rgba(255,255,255,0.06);
}

.top{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:12px;
}

.title{ margin:0; font-size:18px; }
.subtitle{ margin:4px 0 0; opacity:0.8; font-size:13px; }

.status{
  font-size:12px;
  padding:4px 10px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,0.18);
  background: rgba(255,255,255,0.06);
  white-space: nowrap;
}
.status[data-status="MVP Done"]{
  border-color: rgba(120,255,160,0.35);
  background: rgba(120,255,160,0.10);
}
.status[data-status="In Progress"]{
  border-color: rgba(255,220,120,0.35);
  background: rgba(255,220,120,0.10);
}

.oneLiner{ margin:0; line-height:1.5; }

.tags{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}

.meta{
  display:flex;
  flex-direction:column;
  gap:6px;
  padding:10px 12px;
  border-radius:12px;
  border:1px solid rgba(255,255,255,0.10);
  background: rgba(0,0,0,0.12);
}
.metaRow{
  display:flex;
  gap:10px;
}
.metaLabel{
  width:92px;
  opacity:0.75;
  font-size:12px;
}
.metaValue{
  font-size:12px;
  opacity:0.95;
}

.highlights{
  margin:0;
  padding-left:18px;
  display:flex;
  flex-direction:column;
  gap:6px;
}

.links{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
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
</style>