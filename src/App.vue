<script setup lang="ts">
import { computed, ref } from "vue";
import FeaturedProject from "./components/FeaturedProject.vue";
import ProjectCard from "./components/ProjectCard.vue";
import { projects } from "./data/projects";

const query = ref("");
const status = ref<"All" | "Planned" | "In Progress" | "MVP Done">("All");

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  return projects.filter(p => {
    const matchesText =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.oneLiner.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q));

    const matchesStatus = status.value === "All" ? true : p.status === status.value;
    return matchesText && matchesStatus;
  });
});
</script>

<template>
  <div class="page">
    <header class="hero">
      <div class="heroTop">
        <div>
          <h1 class="h1">Chris Espitia Portfolio</h1>
          <p class="lead">
            Focused MVPs aligned to Associate Software Developer requirements:
            .NET/C#, MVC, APIs, EF Core, SQL Server, IIS, Azure, GitHub, and documentation.
          </p>
        </div>

        <div class="cta">
          <a class="primary" href="https://github.com/cespitia" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a class="secondary" href="#" @click.prevent>
            Resume (add link)
          </a>
        </div>
      </div>

      <div class="controls">
        <input
          class="input"
          v-model="query"
          placeholder="Search projects, tech, tags..."
          aria-label="Search"
        />
        <select class="select" v-model="status" aria-label="Filter by status">
          <option>All</option>
          <option>Planned</option>
          <option>In Progress</option>
          <option>MVP Done</option>
        </select>
      </div>

      <div class="featuredWrap">
        <FeaturedProject
          title="TransitHQ"
          subtitle="Transit tracking and mapping prototype"
          description="A transit-focused project exploring real-time vehicle visibility, route context, and map-based UX. Built to practice service integration, data modeling, and clean UI patterns."
          :tags="['Mapping', 'APIs', 'Real-time UX', 'React', 'SQL', 'Cloud']"
          :links="[
            { label: 'GitHub', url: 'https://github.com/cespitia/TransitHQ' },
            { label: 'Readme', url: 'https://github.com/cespitia/TransitHQ#readme' }
          ]"
        />
    </div>

    </header>

    <main class="grid">
      <ProjectCard v-for="p in filtered" :key="p.id" :project="p" />
    </main>

    <footer class="footer">
      <div class="footerInner">
        <span>Built with Vue + TypeScript.</span>
        <span class="sep">·</span>
        <span>Update statuses, links, and screenshots as each MVP ships.</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.page{
  min-height:100vh;
  padding:28px 18px 60px;
  max-width:1100px;
  margin:0 auto;
}

.hero{
  display:flex;
  flex-direction:column;
  gap:16px;
  margin-bottom:18px;
}

.heroTop{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:18px;
  flex-wrap:wrap;
}

.h1{
  margin:0;
  font-size:34px;
  letter-spacing:-0.02em;
}
.lead{
  margin:8px 0 0;
  max-width:820px;
  opacity:0.86;
  line-height:1.6;
}

.cta{
  display:flex;
  gap:10px;
}
.primary,.secondary{
  padding:10px 14px;
  border-radius:12px;
  text-decoration:none;
  border:1px solid rgba(255,255,255,0.14);
  color: inherit;
  background: rgba(255,255,255,0.06);
}
.primary:hover,.secondary:hover{
  background: rgba(255,255,255,0.10);
}

.controls{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
}
.input,.select{
  border-radius:12px;
  border:1px solid rgba(255,255,255,0.14);
  background: rgba(0,0,0,0.20);
  color: inherit;
  padding:10px 12px;
  outline:none;
}
.input{
  flex: 1 1 320px;
}
.select{
  flex: 0 0 180px;
}

.featuredWrap{
  margin-top: 6px;
}

.grid{
  display:grid;
  grid-template-columns: repeat(12, 1fr);
  gap:14px;
}
.grid :deep(article.card){
  grid-column: span 12;
}

@media (min-width: 820px){
  .grid :deep(article.card){
    grid-column: span 6;
  }
}

.footer{
  margin-top:30px;
  opacity:0.75;
  font-size:12px;
}
.footerInner{
  display:flex;
  align-items:center;
  gap:8px;
  flex-wrap:wrap;
}
.sep{ opacity:0.6; }
</style>