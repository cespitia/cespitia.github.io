<template>
  <section class="section">
    <h2 class="sectionTitle">Education</h2>

    <div class="grid">
      <div class="card">
        <div class="school">University of Southern California (USC)</div>
        <div class="degree">M.S. in Computer Science</div>
        <div class="meta">Los Angeles, CA · Expected 2025</div>
      </div>

      <div class="card">
        <div class="school">University of California, San Diego (UCSD)</div>
        <div class="degree">B.S. in Computer Science</div>
        <div class="meta">San Diego, CA · 2021</div>
      </div>
    </div>

    <p class="note">
      Graduate focus on software engineering, systems, and algorithms to support production-ready
      development in enterprise environments.
    </p>
  </section>
</template>

<style scoped>
.section{
  margin-top:16px;
}

.sectionTitle{
  font-size:18px;
  margin-bottom:12px;
  opacity:0.9;
}

.grid{
  display:grid;
  grid-template-columns: repeat(12, 1fr);
  gap:14px;
}

.card{
  grid-column: span 6;
  border:1px solid rgba(255,255,255,0.14);
  border-radius:16px;
  padding:16px;
  background: rgba(255,255,255,0.04);
}

@media (max-width: 820px){
  .card{ grid-column: span 12; }
}

.school{
  font-size:14px;
  margin-bottom:6px;
  opacity:0.92;
}

.degree{
  font-size:13px;
  opacity:0.86;
}

.meta{
  margin-top:6px;
  font-size:12px;
  opacity:0.70;
}

.note{
  margin:12px 0 0;
  font-size:13px;
  line-height:1.6;
  opacity:0.78;
}
</style>