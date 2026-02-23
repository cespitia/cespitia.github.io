<template>
  <section class="section">
    <h2 class="sectionTitle">How I Build Software</h2>

    <div class="grid">
      <div class="block">
        <div class="blockTitle">Architecture First</div>
        <p>
          I design around clear separation of concerns using MVC and service-oriented
          patterns, ensuring maintainability and scalability.
        </p>
      </div>

      <div class="block">
        <div class="blockTitle">Secure & Maintainable</div>
        <p>
          I approach development through Secure SDLC practices with emphasis on
          validation, data integrity, and long-term operability.
        </p>
      </div>

      <div class="block">
        <div class="blockTitle">Documentation Discipline</div>
        <p>
          Requirements specs, design notes, test plans, and deployment guides are
          treated as first-class deliverables.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section{
  margin-top:16px;
}

.sectionTitle{
  font-size:18px;
  margin-bottom:14px;
  opacity:0.9;
}

.grid{
  display:grid;
  grid-template-columns: repeat(12, 1fr);
  gap:14px;
}

.block{
  grid-column: span 4;
  border:1px solid rgba(255,255,255,0.14);
  border-radius:16px;
  padding:16px;
  background: rgba(255,255,255,0.04);
}

@media (max-width: 820px){
  .block{ grid-column: span 12; }
}

.blockTitle{
  font-size:14px;
  margin-bottom:8px;
  opacity:0.85;
}

p{
  margin:0;
  font-size:13px;
  line-height:1.6;
}
</style>