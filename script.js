const materias = [
/ 1er Año
  { id: 1, nombre: "Contenidos Transversales para la Construcción de la Ciudadanía", anio: 1, cuatri: 1, correl: [] },
  { id: 2, nombre: "Historia del Pensamiento Político y Jurídico", anio: 1, cuatri: 1, correl: [] },
  { id: 3, nombre: "Teoría del Derecho y la Justicia", anio: 1, cuatri: 2, correl: [] },
  { id: 4, nombre: "Teoría del Estado", anio: 1, cuatri: 2, correl: [] },
  { id: 5, nombre: "nociones de economia", anio: 1, cuatri: 2, correl: [] },
  { id: 6, nombre: "Destrezas I: Investigación y Escritura Jurídicas Básicas", anio: 1, cuatri: 2, correl: [] },
  
 / 2do Año
    {anio:2, nombre: "Lógica", tipo: "oblig", anio: 2, cuatri: 1, correl: ["Contenidos Transversales para la Construcción de la Ciudadanía", "Historia del Pensamiento Político y Jurídico", "Teoría del Derecho y la Justicia"] },
    {anio:2, nombre: "Derecho Privado: Teoría de la Rel. Juríd. y de la Persona", tipo: "oblig", anio: 2, cuatri: 1, correl: ["Contenidos Transversales para la Construcción de la Ciudadanía","Teoría del Derecho y la Justicia", "Nociones de Economía","Destrezas I: Investigación y Escritura Jurídicas Básicas"] },
    {anio:2, nombre: "Derecho Penal I Parte General", tipo: "oblig", anio: 2, cuatri: 2, correl: ["Derecho Constitucional"] },
    {anio:2, nombre: "Derecho Constitucional", tipo: "oblig", anio: 2, cuatri: 1, correl: ["Contenidos Transversales para la Construcción de la Ciudadanía", "Historia del Pensamiento Político y Jurídico", "Teoría del Estado", "Teoría del Derecho y la Justicia"] },
    {anio:2, nombre: "Obligaciones Civiles y Comerciales", tipo: "oblig", anio: 2, cuatri: 2, correl: ["Derecho Privado: Teoría de la Rel. Juríd. y de la Persona"] },
    {anio:2, nombre: "Nociones de Sociología", tipo: "oblig", anio: 2, cuatri: 2, correl: ["Contenidos Transversales para la Construcción de Ciudadanía", "Historia del Pensamiento Político y Jurídico", "Teoría del Estado"] },

    / 3er Año
    {anio:3,nombre: "Contratos", tipo: "oblig", anio: 3, cuatri: 1, correl: ["Obligaciones Civiles y Comerciales"] },
    {anio:3, nombre: "Derecho Penal II Parte Especial", tipo: "oblig", anio: 3, cuatri: 1, correl: ["Derecho Penal I Parte General"] },
    {anio:3, nombre: "Optativa I", tipo: "optativa", anio: 3, cuatri: 1, correl: [] },
    {anio:3, nombre: "Derecho Procesal I: Teoría General del Proceso y Proceso Penal", tipo: "oblig", anio: 3, cuatri: 2, correl: ["Derecho Constitucional", "Derecho Privado: Teoría de la Rel. Juríd. y de la Persona", "Derecho Penal II Parte Especial"] },
    {anio:3, nombre: "Derecho de la Empresa y los Negocios", tipo: "oblig", anio: 3, cuatri: 2, correl: ["Contratos"] },
    {anio:3, nombre: "Derechos Humanos", tipo: "oblig", anio: 3, cuatri: 2, correl: ["Derecho Constitucional"] },
    {anio:3, nombre: "Destrezas II: Argumentación Oral y Escrita", tipo: "destrezas", anio: 3, cuatri: 2, correl: ["Destrezas I: Investigación y Escritura Jurídicas Básicas","Lógica","Nociones de Sociología"] },


    / 4to Año
    {anio:4, nombre: "Derecho Societario y Derecho Cambiario", tipo: "oblig", anio: 4, cuatri: 1, correl: ["Derecho de la Empresa y los Negocios"] },
    {anio:4, nombre: "Derecho Procesal II: Proceso Civil y Comercial", tipo: "oblig", anio: 4, cuatri: 1, correl: ["Derecho Procesal I: Teoría General del Proceso y Proceso Penal", "Obligaciones Civiles y Comerciales"] },
    {anio:4, nombre: "Derecho Ambiental", tipo: "oblig", anio: 4, cuatri: 1, correl: ["Derecho Constitucional", "Contratos"] },
    {anio:4, nombre: "Optativa II", tipo: "optativa", anio: 4, cuatri: 1, correl: [] },
    {anio:4, nombre: "Derecho Reales", tipo: "oblig", anio: 4, cuatri: 2, correl: ["Derecho Constitucional", "Contratos"] },
    {anio:4, nombre: "Derechos del Consumidor", tipo: "oblig", anio: 4, cuatri: 2, correl: ["Derecho Constitucional", "Contratos"] },
    {anio:4, nombre: "Destrezas III: Investigación Jurídica", tipo: "destrezas", anio: 4, cuatri: 2, correl: ["Obligaciones Civiles y Comerciales", "Destrezas II: Argumentación Oral y Escrita", "Derecho Penal I Parte General"] },
    {anio:4, nombre: "Derecho del trabajo y derecho de la seguridad social", tipo: "oblig", anio:4, cuatri:2, correl: ["Derecho Constitucional", "Contratos"] },
    

    / 5to Año
    {anio:5, nombre: "Filosofía del Derecho", tipo: "oblig", anio: 5, cuatri: 1, correl: ["Derechos Humanos","Nociones de Sociología"] },
    {anio:5, nombre: "Derecho de Familia y de las Sucesiones", tipo: "oblig", anio: 5, cuatri: 1, correl: ["Derecho Reales","Derecho Procesal I: Teoría General del Proceso y Proceso Penal"] },
    {anio:5, nombre: "Derecho del Transporte", tipo: "oblig", anio: 5, cuatri: 1, correl: ["Derecho de la Empresa y los Negocios"] },
    {anio:5, nombre: "Derecho Administrativo", tipo: "oblig", anio: 5, cuatri: 2, correl: ["derechos reales", "Derecho Procesal II: Proceso Civil y Comercial"] },
    {anio:5, nombre: "Optativa III", tipo: "optativa", anio: 5, cuatri: 2, correl: [] },
    {anio:5, nombre: "concursos y privilegios", tipo: "oblig", anio: 5, cuatri: 2, correl: ["Derecho Societario y Derecho Cambiario",  "Derecho Procesal I: Teoría General del Proceso y Proceso Penal"] },
    {anio:5, nombre: "Destrezas IV: Habilidades para el Litigio", tipo: "destrezas", anio: 5, cuatri: 2, correl: ["Destrezas III: Investigación Jurídica", "Contratos", "Derecho Procesal I: Teoría General del Proceso y Proceso Penal"] },

    / 6to Año
    {anio:6,  nombre: "Derecho Internacional Público y Politica exterior", tipo: "oblig", anio: 6, cuatri: 1, correl: ["Derechos humanos"] },
    {anio:6,  nombre: "Derecho Tributario y Derecho Financiero", tipo: "oblig", anio: 6, cuatri: 1, correl: ["Derecho Administrativo"] },
    {anio:6,  nombre: "Optativa IV", tipo: "optativa", anio: 6, cuatri: 1, correl: [] },
    {anio:6,  nombre: "optativa V", tipo: "optativa", anio: 6, cuatri: 2, correl: [] },
    {anio:6,  nombre: "Destrezas V: Práctica Profesional Aplicada", tipo: "destrezas", anio: 6, cuatri: 1, correl: ["Derecho de Familia y de las Sucesiones", "Derecho Procesal II: Proceso Civil y Comercial","Destrezas IV: Habilidades para el Litigio"] },
    {anio:6,  nombre: "Derecho Internacional Privado", tipo: "oblig", anio: 6, cuatri: 2, correl: ["Derecho de Familia y de las Sucesiones","concursos y privilegios"],
];

// Obtener aprobadas desde localStorage
let aprobadas = JSON.parse(localStorage.getItem("materiasAprobadas")) || [];

function renderMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  const agrupadas = {};
  materias.forEach(m => {
    const key = `${m.anio}º Año - ${m.cuatri}º Cuatrimestre`;
    if (!agrupadas[key]) agrupadas[key] = [];
    agrupadas[key].push(m);
  });

  for (const bloque in agrupadas) {
    const div = document.createElement("div");
    div.className = "anio-cuatrimestre";
    const titulo = document.createElement("h2");
    titulo.textContent = bloque;
    div.appendChild(titulo);

    agrupadas[bloque].forEach(m => {
      const matDiv = document.createElement("div");
      matDiv.className = "materia";

      if (aprobadas.includes(m.id)) {
        matDiv.classList.add("aprobada");
      } else if (m.correl.length === 0 || m.correl.every(c => aprobadas.includes(c))) {
        matDiv.classList.add(m.correl.length === 0 ? "libre" : "desbloqueada");
        matDiv.addEventListener("click", () => aprobarMateria(m.id));
      } else {
        matDiv.classList.add("bloqueada");
      }

      matDiv.textContent = m.nombre;
      div.appendChild(matDiv);
    });

    container.appendChild(div);
  }
}

function aprobarMateria(id) {
  if (!aprobadas.includes(id)) {
    aprobadas.push(id);
    localStorage.setItem("materiasAprobadas", JSON.stringify(aprobadas));
    renderMalla();
  }
}

renderMalla();
