<template>
  <section class="section">
    <h2 class="sectionTitle">Certifications</h2>

    <div class="certGrid">
      <div class="certCard">
        <div class="certTitle">CompTIA Security+</div>
        <div class="certMeta">Enterprise security fundamentals</div>
      </div>

      <div class="certCard">
        <div class="certTitle">CompTIA Network+</div>
        <div class="certMeta">Networking and infrastructure foundations</div>
      </div>

      <div class="certCard">
        <div class="certTitle">CompTIA A+</div>
        <div class="certMeta">Systems and troubleshooting fundamentals</div>
      </div>

      <div class="certCard">
        <div class="certTitle">CompTIA Cloud+</div>
        <div class="certMeta">Cloud infrastructure and virtualization concepts</div>
      </div>

      <div class="certCard">
        <div class="certTitle">Microsoft Certified: Power Platform Fundamentals</div>
        <div class="certMeta">Business applications and low-code platform fundamentals</div>
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
  margin-bottom:12px;
  opacity:0.9;
  color: var(--accent);
}

.certGrid{
  display:grid;
  grid-template-columns: repeat(12, 1fr);
  gap:14px;
}

.certCard{
  grid-column: span 6;
  border:1px solid rgba(255,255,255,0.14);
  border-radius:16px;
  padding:14px;
  background: rgba(255,255,255,0.04);
  transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease;
}

.certCard:hover{
  transform: translateY(-3px);
  border-color: rgba(255,255,255,0.22);
}

@media (max-width:820px){
  .certCard{
    grid-column: span 12;
  }
}

.certTitle{
  font-size:13px;
  margin-bottom:6px;
  opacity:0.92;
}

.certMeta{
  font-size:12px;
  opacity:0.75;
}
</style>