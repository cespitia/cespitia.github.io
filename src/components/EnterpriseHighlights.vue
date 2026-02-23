<template>
  <section class="section">
    <h2 class="sectionTitle">Enterprise Experience</h2>

    <div class="grid">
      <div class="card">
        <div class="cardTitle">Secure SDLC</div>
        <ul>
          <li>Requirements analysis → design → implementation → testing</li>
          <li>Secure coding awareness and validation</li>
          <li>Post-release support and maintenance</li>
        </ul>
      </div>

      <div class="card">
        <div class="cardTitle">Production Support</div>
        <ul>
          <li>Escalated incident response</li>
          <li>Root cause analysis</li>
          <li>Legacy system modernization</li>
        </ul>
      </div>

      <div class="card">
        <div class="cardTitle">Database-Driven Systems</div>
        <ul>
          <li>Relational schema design</li>
          <li>Normalization & data integrity</li>
          <li>SQL-backed application logic</li>
        </ul>
      </div>

      <div class="card">
        <div class="cardTitle">Infrastructure Awareness</div>
        <ul>
          <li>Windows Server environments</li>
          <li>IIS & Azure familiarity</li>
          <li>Disaster recovery support</li>
        </ul>
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

.cardTitle{
  font-size:14px;
  margin-bottom:8px;
  opacity:0.85;
}

ul{
  margin:0;
  padding-left:18px;
  font-size:13px;
  display:flex;
  flex-direction:column;
  gap:6px;
}
</style>