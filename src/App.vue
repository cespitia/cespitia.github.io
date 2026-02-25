<script setup lang="ts">
import { computed, ref, onMounted } from "vue";

import FeaturedProject from "./components/FeaturedProject.vue";
import EnterpriseHighlights from "./components/EnterpriseHighlights.vue";
import ProjectCard from "./components/ProjectCard.vue";
import EngineeringPhilosophy from "./components/EngineeringPhilosophy.vue";
import Education from "./components/Education.vue";
import Certifications from "./components/Certifications.vue";
import SectionDivider from "./components/SectionDivider.vue";

import { projects } from "./data/projects";

const visits = ref<number | null>(null)

onMounted(async () => {
  try {
    const res = await fetch(
      'https://api.countapi.xyz/hit/cespitia-portfolio/visits'
    )
    const data = await res.json()
    visits.value = data.value
  } catch (e) {
    console.error('Counter failed', e)
  }
})

const query = ref("");
const status = ref<"All" | "Planned" | "In Progress" | "MVP Done">("All");

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();

  return projects.filter((p) => {
    const matchesText =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.oneLiner.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));

    const matchesStatus =
      status.value === "All" ? true : p.status === status.value;

    return matchesText && matchesStatus;
  });
});
</script>

<template>
  <div class="page">

    <!-- HERO -->
    <header class="hero">
      <div class="heroContent">
        <div class="heroTop">
          <div class="heroPhoto">
            <img
              src="/images/headshot.png"
              alt="Christopher Espitia headshot"
            />
          </div>

          <div class="heroText">
            <h1 class="h1">Christopher Espitia Portfolio</h1>

            <p class="lead">
              Associate Software Developer with enterprise experience across Secure SDLC,
              database-driven applications, and Microsoft .NET ecosystems.
              Focused on building maintainable, documented, production-ready systems.
            </p>

            <div class="cta">
              <a
                class="primary"
                href="https://github.com/cespitia"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                class="secondary"
                href="/resume/Christopher_Espitia_Associate_Software_Developer_Resume.pdf"
                target="_blank"
                rel="noopener"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        <div class="heroPills">
          <span class="pill">C# / .NET</span>
          <span class="pill">MVC + Web APIs</span>
          <span class="pill">Entity Framework</span>
          <span class="pill">SQL Server</span>
          <span class="pill">IIS + Azure</span>
          <span class="pill">Secure SDLC</span>
        </div>
      </div>

      <!-- Search Controls -->
      <div class="controls">
        <input
          class="input"
          v-model="query"
          placeholder="Search projects, tech, tags..."
        />
        <select class="select" v-model="status">
          <option>All</option>
          <option>Planned</option>
          <option>In Progress</option>
          <option>MVP Done</option>
        </select>
      </div>

      <!-- Featured Project -->
      <div class="featuredWrap">
        <FeaturedProject
          title="TransitHQ"
          subtitle="Real-time transit intelligence platform"
          description="Mobile-first rider experience backed by a gateway that normalizes upstream feeds, applies caching strategies, and lays the groundwork for reliability analytics."
          :stack="['React + TypeScript', 'Django REST', 'Redis', 'Postgres']"
          architectureTitle="Architecture"
          architectureLine="React → Django REST API → Redis (real-time cache) + Postgres"
          :bullets="[
            'Nearby stops and arrivals (MVP path)',
            'Rate-limit friendly polling and caching',
            'Foundation for reliability scoring and analytics'
          ]"
          :links="[
            { label: 'GitHub Repo', url: 'https://github.com/cespitia/transit-hq' }
          ]"
          imageUrl="/images/nearby-stops-loaded.png"
        />
      </div>
    </header>

    <!-- ENTERPRISE EXPERIENCE -->
    <EnterpriseHighlights />

    <SectionDivider />

    <!-- PROJECTS GRID -->
    <main class="grid">
      <ProjectCard
        v-for="p in filtered"
        :key="p.id"
        :project="p"
      />
    </main>

    <SectionDivider />

    <!-- ENGINEERING PHILOSOPHY -->
    <EngineeringPhilosophy />

    <SectionDivider />

    <!-- EDUCATION -->
    <Education />

    <SectionDivider />

    <!-- CERTIFICATIONS -->
    <Certifications />

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footerInner">
        <span>Built with Vue + TypeScript.</span>
        <span class="sep">·</span>
        <span>Enterprise-focused .NET & cloud-oriented development.</span>
      </div>
      <div class="visitCounter">
        <span>{{ visits }}</span>
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

/* HERO */
.hero{
  display:flex;
  flex-direction:column;
  gap:18px;
  margin-bottom:24px;
}

.heroContent{
  max-width:820px;
}

.heroTop{
  display:flex;
  align-items:flex-start;
  gap:18px;
}

.heroPhoto{
  width:200px;
  height:200px;
  border-radius:999px;
  overflow:hidden;
  border:1px solid rgba(255,255,255,0.18);
  box-shadow:0 14px 34px rgba(0,0,0,0.28);
  flex-shrink:0;
}

.heroPhoto img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}

.heroText{
  min-width:0;
}

@media (max-width: 720px){
  .heroTop{
    flex-direction:column;
  }
  .heroPhoto{
    width:84px;
    height:84px;
  }
}

.h1{
  margin:0;
  font-size:34px;
  letter-spacing:-0.02em;
}

.lead{
  margin:12px 0 18px;
  opacity:0.85;
  line-height:1.6;
}

/* CTA */
.cta{
  display:flex;
  gap:12px;
}

.heroPills{
  margin-top:14px;
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}

.pill{
  padding:6px 12px;
  border-radius:999px;
  border:1px solid var(--accent-border);
  background: var(--accent-soft);
  font-size:12px;
  opacity:0.95;
}

.primary{
  padding:10px 16px;
  border-radius:12px;
  text-decoration:none;
  border:none;
  color:white;
  background: var(--dotnet-purple);
  font-weight:500;
  transition: all 0.2s ease;
}

.primary:hover{
  background: var(--dotnet-purple-hover);
  transform: translateY(-1px);
}

.secondary{
  padding:10px 16px;
  border-radius:12px;
  text-decoration:none;
  border:1px solid var(--dotnet-purple);
  color: var(--dotnet-purple);
  background: rgba(255,255,255,0.95);
  font-weight:500;
  transition: all 0.2s ease;
}

.secondary:hover{
  background: var(--dotnet-purple);
  color: white;
  transform: translateY(-1px);
}

/* Search Controls */
.controls{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
}

.input,
.select{
  border-radius:12px;
  border:1px solid rgba(255,255,255,0.14);
  background:rgba(0,0,0,0.20);
  color:inherit;
  padding:10px 12px;
}

.input{ flex:1 1 320px; }
.select{ flex:0 0 180px; }

/* Featured */
.featuredWrap{
  margin-top:6px;
}

/* Grid */
.grid{
  display:grid;
  grid-template-columns:repeat(12,1fr);
  gap:16px;
  margin-top:24px;
}

.grid :deep(article.card){
  grid-column:span 12;
}

@media (min-width:820px){
  .grid :deep(article.card){
    grid-column:span 6;
  }
}

/* Footer */
.footer{
  margin-top:24px;
  opacity:0.70;
  font-size:12px;
}

.footerInner{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
}

.sep{ opacity:0.6; }

.media[data-v-940c14a1] {
  margin-top: 15px;
}

.visitCounter{
  margin-top:18px;
  font-size:12px;
  opacity:0.65;
  text-align:center;
}

</style>