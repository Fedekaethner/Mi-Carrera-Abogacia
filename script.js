const materias = [
  // 1er Año
  { id: 1, nombre: "Contenidos Transversales para la Construcción de la Ciudadanía", anio: 1, cuatri: 1, correl: [] },
  { id: 2, nombre: "Historia del Pensamiento Político y Jurídico", anio: 1, cuatri: 1, correl: [] },
  { id: 3, nombre: "Teoría del Derecho y la Justicia", anio: 1, cuatri: 2, correl: [] },
  { id: 4, nombre: "Teoría del Estado", anio: 1, cuatri: 2, correl: [] },
  { id: 5, nombre: "nociones de economia", anio: 1, cuatri: 2, correl: [] },
  { id: 6, nombre: "Destrezas I: Investigación y Escritura Jurídicas Básicas", anio: 1, cuatri: 2, correl: [] },

  // 2do Año
  { id: 7, nombre: "Lógica", tipo: "oblig", anio: 2, cuatri: 1, correl: [1, 2, 3] },
  { id: 8, nombre: "Derecho Privado: Teoría de la Rel. Juríd. y de la Persona", tipo: "oblig", anio: 2, cuatri: 1, correl: [1, 3, 5, 6] },
  { id: 9, nombre: "Derecho Penal I Parte General", tipo: "oblig", anio: 2, cuatri: 2, correl: [10] },
  { id: 10, nombre: "Derecho Constitucional", tipo: "oblig", anio: 2, cuatri: 1, correl: [1, 2, 4, 3] },
  { id: 11, nombre: "Obligaciones Civiles y Comerciales", tipo: "oblig", anio: 2, cuatri: 2, correl: [8] },
  { id: 12, nombre: "Nociones de Sociología", tipo: "oblig", anio: 2, cuatri: 2, correl: [1, 2, 4] },

  // 3er Año
  { id: 13, nombre: "Contratos", tipo: "oblig", anio: 3, cuatri: 1, correl: [11] },
  { id: 14, nombre: "Derecho Penal II Parte Especial", tipo: "oblig", anio: 3, cuatri: 1, correl: [9] },
  { id: 15, nombre: "Optativa I", tipo: "optativa", anio: 3, cuatri: 1, correl: [] },
  { id: 16, nombre: "Derecho Procesal I: Teoría General del Proceso y Proceso Penal", tipo: "oblig", anio: 3, cuatri: 2, correl: [10, 8, 14] },
  { id: 17, nombre: "Derecho de la Empresa y los Negocios", tipo: "oblig", anio: 3, cuatri: 2, correl: [13] },
  { id: 18, nombre: "Derechos Humanos", tipo: "oblig", anio: 3, cuatri: 2, correl: [10] },
  { id: 19, nombre: "Destrezas II: Argumentación Oral y Escrita", tipo: "destrezas", anio: 3, cuatri: 2, correl: [6, 7, 12] },

  // 4to Año
  { id: 20, nombre: "Derecho Societario y Derecho Cambiario", tipo: "oblig", anio: 4, cuatri: 1, correl: [17] },
  { id: 21, nombre: "Derecho Procesal II: Proceso Civil y Comercial", tipo: "oblig", anio: 4, cuatri: 1, correl: [16, 11] },
  { id: 22, nombre: "Derecho Ambiental", tipo: "oblig", anio: 4, cuatri: 1, correl: [10, 13] },
  { id: 23, nombre: "Optativa II", tipo: "optativa", anio: 4, cuatri: 1, correl: [] },
  { id: 24, nombre: "Derecho Reales", tipo: "oblig", anio: 4, cuatri: 2, correl: [10, 13] },
  { id: 25, nombre: "Derechos del Consumidor", tipo: "oblig", anio: 4, cuatri: 2, correl: [10, 13] },
  { id: 26, nombre: "Destrezas III: Investigación Jurídica", tipo: "destrezas", anio: 4, cuatri: 2, correl: [11, 19, 9] },
  { id: 27, nombre: "Derecho del trabajo y derecho de la seguridad social", tipo: "oblig", anio:4, cuatri:2, correl: [10, 13] },

  // 5to Año
  { id: 28, nombre: "Filosofía del Derecho", tipo: "oblig", anio: 5, cuatri: 1, correl: [18, 12] },
  { id: 29, nombre: "Derecho de Familia y de las Sucesiones", tipo: "oblig", anio: 5, cuatri: 1, correl: [24, 16] },
  { id: 30, nombre: "Derecho del Transporte", tipo: "oblig", anio: 5, cuatri: 1, correl: [17] },
  { id: 31, nombre: "Derecho Administrativo", tipo: "oblig", anio: 5, cuatri: 2, correl: [24, 21] },
  { id: 32, nombre: "Optativa III", tipo: "optativa", anio: 5, cuatri: 2, correl: [] },
  { id: 33, nombre: "concursos y privilegios", tipo: "oblig", anio: 5, cuatri: 2, correl: [20, 16] },
  { id: 34, nombre: "Destrezas IV: Habilidades para el Litigio", tipo: "destrezas", anio: 5, cuatri: 2, correl: [26, 13, 16] },

  // 6to Año
  { id: 35, nombre: "Derecho Internacional Público y Politica exterior", tipo: "oblig", anio: 6, cuatri: 1, correl: [18] },
  { id: 36, nombre: "Derecho Tributario y Derecho Financiero", tipo: "oblig", anio: 6, cuatri: 1, correl: [31] },
  { id: 37, nombre: "Optativa IV", tipo: "optativa", anio: 6, cuatri: 1, correl: [] },
  { id: 38, nombre: "optativa V", tipo: "optativa", anio: 6, cuatri: 2, correl: [] },
  { id: 39, nombre: "Destrezas V: Práctica Profesional Aplicada", tipo: "destrezas", anio: 6, cuatri: 1, correl: [29, 21, 34] },
  { id: 40, nombre: "Derecho Internacional Privado", tipo: "oblig", anio: 6, cuatri: 2, correl: [29, 33] },
];

// Obtener aprobadas desde localStorage
let aprobadas = JSON.parse(localStorage.getItem("materiasAprobadas")) || [];

function renderMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  // Agrupar por año y luego por cuatrimestre
  const agrupadas = {};
  materias.forEach(m => {
    if (!agrupadas[m.anio]) agrupadas[m.anio] = {};
    if (!agrupadas[m.anio][m.cuatri]) agrupadas[m.anio][m.cuatri] = [];
    agrupadas[m.anio][m.cuatri].push(m);
  });

  // Recorrer años ordenados
  Object.keys(agrupadas).sort((a, b) => a - b).forEach(anio => {
    const divAnio = document.createElement("div");
    divAnio.className = "anio-cuatrimestre-vertical";

    const tituloAnio = document.createElement("h2");
    tituloAnio.textContent = `${anio}º Año`;
    divAnio.appendChild(tituloAnio);

    // Recorrer cuatrimestres ordenados
    Object.keys(agrupadas[anio]).sort((a, b) => a - b).forEach(cuatri => {
      const divCuatri = document.createElement("div");
      divCuatri.className = "cuatrimestre-vertical";

      const tituloCuatri = document.createElement("h3");
      tituloCuatri.textContent = `${cuatri}º Cuatrimestre`;
      divCuatri.appendChild(tituloCuatri);

      agrupadas[anio][cuatri].forEach(m => {
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
        divCuatri.appendChild(matDiv);
      });

      divAnio.appendChild(divCuatri);
    });

    container.appendChild(divAnio);
  });
}

function aprobarMateria(id) {
  if (!aprobadas.includes(id)) {
    aprobadas.push(id);
    localStorage.setItem("materiasAprobadas", JSON.stringify(aprobadas));
    renderMalla();
  }
}

renderMalla();
