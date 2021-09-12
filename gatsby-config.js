module.exports = {
  siteMetadata: {
    siteUrl: `https://keepcoding.io/`,
    name: `Keepcoding Tech School`,
    description: `Trabajo Final Bootcamp BDMLAI7`,
    last_updated: `Uso práctico de tecnologías disruptivas en la gestión de datos electorales`,
    data_source: `<a target="_blank" href="http://www.interior.gob.es/" rel="noopener noreferrer">Ministerio del Interior</a> 
    | <a target="_blank" href="http://www.cis.es/" rel="noopener noreferrer">CIS</a>
    | <a target="_blank" href="http://www.twitter.com/" rel="noopener noreferrer">Twitter</a>`,

    //order of provinces is important!
    data: [{"PROVINCIA":"Melilla","PSOE":0.0,"PP":1.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Ceuta","PSOE":0.0,"PP":0.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Zaragoza","PSOE":3.0,"PP":2.0,"VOX":1.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Zamora","PSOE":1.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Bizkaia","PSOE":2.0,"PP":1.0,"VOX":0.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Valladolid","PSOE":2.0,"PP":2.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Valencia","PSOE":4.0,"PP":4.0,"VOX":3.0,"UP":2.0,"CS":1.0},
    {"PROVINCIA":"Toledo","PSOE":2.0,"PP":2.0,"VOX":2.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Teruel","PSOE":1.0,"PP":1.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Tarragona","PSOE":2.0,"PP":0.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Soria","PSOE":1.0,"PP":1.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Sevilla","PSOE":5.0,"PP":2.0,"VOX":2.0,"UP":2.0,"CS":1.0},
    {"PROVINCIA":"Segovia","PSOE":1.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Cantabria","PSOE":1.0,"PP":2.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Salamanca","PSOE":1.0,"PP":2.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Pontevedra","PSOE":3.0,"PP":3.0,"VOX":0.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Palencia","PSOE":1.0,"PP":2.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Asturias","PSOE":3.0,"PP":2.0,"VOX":1.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Ourense","PSOE":2.0,"PP":2.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Navarra","PSOE":1.0,"PP":0.0,"VOX":0.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Murcia","PSOE":3.0,"PP":3.0,"VOX":3.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Málaga","PSOE":4.0,"PP":3.0,"VOX":2.0,"UP":1.0,"CS":1.0},
    {"PROVINCIA":"Madrid","PSOE":10.0,"PP":10.0,"VOX":7.0,"UP":5.0,"CS":3.0},
    {"PROVINCIA":"Lugo","PSOE":2.0,"PP":2.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"La Rioja","PSOE":2.0,"PP":2.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Lleida","PSOE":1.0,"PP":0.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"León","PSOE":2.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Jaén","PSOE":3.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Huesca","PSOE":2.0,"PP":1.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Huelva","PSOE":3.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Gipuzkoa","PSOE":1.0,"PP":0.0,"VOX":0.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Guadalajara","PSOE":1.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Granada","PSOE":3.0,"PP":2.0,"VOX":1.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Girona","PSOE":1.0,"PP":0.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Cuenca","PSOE":2.0,"PP":1.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"A Coruña","PSOE":3.0,"PP":3.0,"VOX":0.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Córdoba","PSOE":2.0,"PP":2.0,"VOX":1.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Ciudad Real","PSOE":2.0,"PP":2.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Castellón","PSOE":2.0,"PP":1.0,"VOX":1.0,"UP":1.0,"CS":0.0},
    {"PROVINCIA":"Cádiz","PSOE":3.0,"PP":2.0,"VOX":2.0,"UP":1.0,"CS":1.0},
    {"PROVINCIA":"Cáceres","PSOE":2.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Burgos","PSOE":2.0,"PP":2.0,"VOX":0.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Barcelona","PSOE":8.0,"PP":2.0,"VOX":2.0,"UP":0.0,"CS":2.0},
    {"PROVINCIA":"Illes Balears","PSOE":2.0,"PP":2.0,"VOX":2.0,"UP":2.0,"CS":0.0},
    {"PROVINCIA":"Badajoz","PSOE":3.0,"PP":2.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Ávila","PSOE":1.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Almería","PSOE":2.0,"PP":2.0,"VOX":2.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Alicante","PSOE":4.0,"PP":3.0,"VOX":3.0,"UP":1.0,"CS":1.0},
    {"PROVINCIA":"Albacete","PSOE":2.0,"PP":1.0,"VOX":1.0,"UP":0.0,"CS":0.0},
    {"PROVINCIA":"Álava","PSOE":1.0,"PP":0.0,"VOX":0.0,"UP":1.0,"CS":0.0}],
    
    /*
    [
      { province: "Melilla", psoe: 2, pp: 50 },
      { province: "Ceuta", psoe: 3, pp: 49 },
      { province: "Zaragoza", psoe: 4, pp: 48 },
      { province: "Zamora", psoe: 5, pp: 47 },
      { province: "Bizkaia", psoe: 6, pp: 46 },
      { province: "Valladolid", psoe: 7, pp: 45 },
      { province: "Valencia", psoe: 8, pp: 44 },
      { province: "Toledo", psoe: 9, pp: 43 },
      { province: "Teruel", psoe: 10, pp: 42 },
      { province: "Tarragona", psoe: 11, pp: 41 },
      { province: "Soria", psoe: 12, pp: 40 },
      { province: "Sevilla", psoe: 13, pp: 39 },
      { province: "Segovia", psoe: 14, pp: 38 },
      { province: "Cantabria", psoe: 15, pp: 37 },
      { province: "Salamanca", psoe: 16, pp: 36 },
      { province: "Pontevedra", psoe: 17, pp: 35 },
      { province: "Palencia", psoe: 18, pp: 34 },
      { province: "Asturias", psoe: 19, pp: 33 },
      { province: "Ourense", psoe: 20, pp: 32 },
      { province: "Navarra", psoe: 21, pp: 31 },
      { province: "Murcia", psoe: 22, pp: 30 },
      { province: "Málaga", psoe: 23, pp: 29 },
      { province: "Madrid", psoe: 24, pp: 28 },
      { province: "Lugo", psoe: 25, pp: 27 },
      { province: "La Rioja", psoe: 26, pp: 26 },
      { province: "Lleida", psoe: 27, pp: 25 },
      { province: "León", psoe: 28, pp: 24 },
      { province: "Jaén", psoe: 29, pp: 23 },
      { province: "Huesca", psoe: 30, pp: 22 },
      { province: "Huelva", psoe: 31, pp: 21 },
      { province: "Guipuzkoa", psoe: 32, pp: 20 },
      { province: "Guadalajara", psoe: 33, pp: 19 },
      { province: "Granada", psoe: 34, pp: 18 },
      { province: "Girona", psoe: 35, pp: 17 },
      { province: "Cuenca", psoe: 36, pp: 16 },
      { province: "A Coruña", psoe: 37, pp: 15 },
      { province: "Córdoba", psoe: 38, pp: 14 },
      { province: "Ciudad Real", psoe: 39, pp: 13 },
      { province: "Castellón", psoe: 40, pp: 12 },
      { province: "Cádiz", psoe: 41, pp: 11 },
      { province: "Cáceres", psoe: 42, pp: 10 },
      { province: "Burgos", psoe: 43, pp: 9 },
      { province: "Barcelona", psoe: 44, pp: 8 },
      { province: "Illes Balears", psoe: 45, pp: 7 },
      { province: "Badajoz", psoe: 46, pp: 6 },
      { province: "Ávila", psoe: 47, pp: 5 },
      { province: "Almería", psoe: 48, pp: 4 },
      { province: "Alicante", psoe: 49, pp: 3 },      
      { province: "Albacete", psoe: 50, pp: 2 },
      { province: "Álava", psoe: 51, pp: 1 },
    ],
    */
    faqs: [
      {
        question: `Definición del Data Set`,
        answer: `<p id="data_img"></p>
        <p>La naturaleza del presente proyecto se sintetiza en el despliegue de un laboratorio de investigación, en base a las actuales tecnologías disruptivas de gestión de datos, sobre comportamiento electoral de los españoles.</p>
<p>En este sentido la principal dificultad radica en el propio proceso de selección de variables, obligando a delimitar un espacio acotado de trabajo sobre datos de acceso publico:</p>
<p><h5>Datos electorales</h5></p>
<p>Los datos electorales son la base de la Práctica, y constan de los resultados electorales detallados de las secciones censales en los comicios generales de 2011, 2015, 2016, y los dos celebrados en 2019. Los datos se han extraído de la página web del <a target="_blank" rel="noopener noreferrer" href="http://www.infoelectoral.mir.es/infoelectoral/min/areaDescarga.html%3Bjsessionid=973C4547323B195A974FFF6B90C32B52?method=searchb">Ministerio del Interior</a>. Se trata de, para cada elección, de un conjunto de ficheros .DAT. Los dos fundamentales son los que definen las distintas mesas electorales, y el resultado de cada partido en ellas.</p>
<p><h5>Datos sociodemográficos</h5>
<p>Hemos complementado los datos electorales de las secciones con datos sociodemográficos, también a nivel de sección censal cuando fue posible, o a nivel de municipio en su defecto. El origen de los datos ha sido el INE, el Ministerio de Inclusión Social y Migraciones, y el Ministerio de Trabajo y Economía Social.</p>
<p> Esta decisión se justifica ante el hecho de que una vez considerados los resultados electorales como variable objetivo en nuestro estudio, es necesario establecer una imagen fija de las personas que ya sabemos como vota. Evidentemente el objetivo es conocer las posibles relaciones entre ambos conjuntos de datos.
<p><h5>Twitter</h5></p>
<p>Esta fuente puede considerarse como uno de los pilares de la práctica final: aportar una fuente de datos dinámica a escenarios dibujados por datos estáticos. Las encuestas tradicionales (CIS) suscitan numerosas críticas en su aportación a la investigación por varios factores (sesgo en el trabajo de campo, cocina estadística, etc.), sin embargo, las redes sociales, con la debida gestión y rigor científico, pueden ofrecer una increíble dinamismo sobre la actualidad y la opinión generada y cómo ambas podrían estar relacionadas con nuestra variable objetivo.</p>
<p>En este sentido, justificamos la especial importancia de una fuente de información no estructurada que se convierte en sí en un campo por explorar para la ciencia de los datos como ciencia del análisis social.<p>
<p>De hecho, así lo confirma que se trate de un tema en vías de desarrollo, objeto de numerosas investigaciones nacionales e internacionales y tesis doctorales actuales, por las que decidimos incluir la variable redes sociales, en concreto Twitter, en nuestro análisis de los resultados electorales de las elecciones generales del último año.</p>
<p><a target="_blank" rel="noopener noreferrer" href="http://electomedia.codx.tech/">Consultar el marco teórico desarrollado sobre el uso de Twitter</a></p>
<p><h5>Microdatos del Centro de Investigaciones Sociológicas</h5></p>
<p>Los estudios del Centro de Investigaciones Sociológicas son una importante fuente de datos en materia electoral. Concretamente, realización de los Macrobarómetros en las semanas previas a los comicios análizados, son considerados una importante fuente para el ejercicio actual</p>
<p>Nos podemos preguntar si sería posible hacer una estimación de voto futuro a partir de un sondeo. Para ello nos basamos en los microdatos del sondeo del CIS antes de las elecciones de noviembre de 2019. El CIS es la única firma de sondeos que hace público sus microdatos, y en el caso de los sondeos preelectorales se trata de una muestra de casi 18.000 encuestas.</p>
<p>Con lo expuesto aquí, justificamos el primer bloque de la práctica con la intencionalidad de abordar tres grandes bloques de datos: </p>
<li>Resultados electorales</li>
<li>Perfiles sociales</li>
<li>Análisis de sentimiento</li>
        `,
      },
      {
        question: `Análisis Exploratorio`,
        answer: `<p id="explo_img"></p>
        <li>Visualización</li>
        <li>Estadística</li>
        <li>Correlación</li>
        <h5>Datos electorales</h5>
        <p> En el cuaderno <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/analisis_inicial_ine/1-Transformador_inicial_elecciones_s3_access_key_oculta.ipynb">Transformacion_inicial_elecciones</a> cargamos el fichero .DAT, y colocamos los votos recibidos por cada partido en columnas. Los códigos y nombres de cada partido los hemos definido nosotros para simplificar y poder compararlos con los de otras elecciones. Posteriormente, añadimos datos comunes a las mesas electorales, tales como censo o número de votantes, que proceden de otro fichero .DAT. Finalmente, agrupamos los datos por secciones censales, que contienen una o varias mesas electorales. Se crea un dataset para cada elección, cinco en total, cuyas filas son los resultados en cada sección, unas 36 mil, aunque el número no es fijo.<p>
        <h5>Datos sociodemográficos</h5>
        <p>El primer conjunto de datos es la distribución de edades de la población de cada sección censal, que se pueden descargar <a target="_blank" rel="noopener noreferrer" href="https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177012&menu=resultados&idp=1254734710990#!tabs-1254736195461">aquí</a> de la web del INE. Los ficheros son de formato .PX, por lo que hubo que transformarlo en dataframes mediante un sencillo cuaderno en R. El dataframe resultante lo tratamos en el cuaderno <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/analisis_inicial_ine/4-Secciones_edades-s3.ipynb">Secciones_edades</a>, que básicamente lleva a cabo un método pivot() y pone en columnas los tramos de edad y la distribución por sexos. Los datos del INE tienen periodicidad anual, por lo que utilizamos los de cada año para cada elección.</p>
        <p> El INE está produciendo una serie de estadísticas experimentales por secciones censales de la renta per cápita, por hogar, y su distribución según su origen, que hemos descargado de este <a target="_blank" rel="noopener noreferrer" href="https://www.ine.es/experimental/atlas/exp_atlas_tab.htm">link</a>. Su formato es complicado, aparte de contener bastantes datos en blanco. A ser ficheros únicos que contienen datos a partir de 2015, hemos utilizado sus mismos datos para todas las elecciones.</p>
        <p>Hemos dividido su tratamiento en dos cuadernos: <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/analisis_inicial_ine/5-Rentas-INE-s3.ipynb">Rentas_INE</a> y <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/analisis_inicial_ine/6-Distribucion_rentas_INE-s3.ipynb">Distribucion_rentas_INE</a>. A los ficheros Excel que se han descargado les hemos sometido a un ligero pre-pretratamiento, básicamente eliminado las filas iniciales.</p>
        <p>Los datos de carácter más socio-económico son los de afiliación a la Seguridad Social y los de los demandantes del paro, que se pueden descargar de <a target="_blank" rel="noopener noreferrer" href="https://www.seg-social.es/wps/portal/wss/internet/EstadisticasPresupuestosEstudios/Estadisticas/EST8/EST10/EST305/1836">aquí</a> y <a target="_blank" rel="noopener noreferrer" href="https://sepe.es/HomeSepe/que-es-el-sepe/estadisticas/datos-estadisticos/municipios.html">aquí</a>, respectivamente. Al ser datos mensuales, éstos se ajustan perfectamente en el tiempo a las elecciones, pero, sin embargo, tienen solo información a nivel de municipio. Hemos tratado estos datos en un solo cuaderno, <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/analisis_inicial_ine/7-Afiliacion_SS_Paro-s3.ipynb">Afiliacion_SS_Paro</a>.</p>
        <h5>Sobre las secciones electorales</h5>
        <p>A priori se podría pensar que las secciones censales son iguales y fijas para todas las elecciones, pero no es así. Al contrario, muchas varían de definición geográfica, al menos una vez al año. El INE informa de ello anualmente, y distribuye una definición geométrica de todas ellas en su página <a target="_blank" rel="noopener noreferrer" href="https://www.ine.es/ss/Satellite?L=es_ES&c=Page&cid=1259952026632&p=1259952026632&pagename=ProductosYServicios/PYSLayout">web</a>, estando en formato SHAPE. Estas secciones se pueden mostrar en un mapa mediante la librería Geopandas, y ello es lo que hacemos en el cuaderno del mismo nombre, <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/visualizaciones/Geopandas_Ejemplo-s3.ipynb">Geopandas_Ejemplo</a>. En este cuaderno hacemos un merge con los datasets correspondientes a cada elección que obtenemos del cuaderno Unificación, con lo que conseguimos una visualización por secciones, no solo de datos electorales, sino también sociodemográficos.</p>
        <h5>La realidad dinámica: Twitter</h5>
        <p>El objetivo de incluir datos de las interacciones de Twitter sobre asuntos electorales en las semanas precias a las elecciones, no es tanto el de intentar hallar una clara correlación con la conducta electoral de los ciudadanos, como de aproximarnos a las técnicas que actualmente se desarrollan para ordenar fuentes que se caracterizan por su tamaño y ruido.</p>
        <p>En nuestra exploración sobre el marco teórico, la literatura consultada respecto a la utilización de Twitter como herramienta de predicción electoral nos lleva a esperar un resultado no demasiado ajustado u optimista. Más bien al contrario.</p>
        <p>Aun con la evidencia en nuestra contra sobre la calidad de los resultados decidimos realizar nuestra propia búsqueda de tweets relacionados con las elecciones generales y los partidos para el año 2019 y valorar la posibilidad de realizar un análisis de sentimiento y detectar intención de voto.</p>
        <p><a target="_blank" rel="noopener noreferrer" href="http://electomedia.codx.tech/">Consultar el marco teórico desarrollado sobre el uso de Twitter</a></p>
        <h5>Una visión aproximada de los datos del CIS</h5>
        <p>La previsión de voto la hemos desarrollado en el cuaderno <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/otras_fuentes/CIS_N19_def-s3.ipynb">CIS_N19_def</a>, y realmente no ha resultado excesivamente complicado. La variable objetivo a modelizar es la intención directa de voto de los encuestados; aproximadamente un 30% de éstos, en cambio no dice lo que van a votar, y ello es precisamente lo que hay que modelar y después estimar.</p>
        `,
      },
      {
        question: `Arquitectura`,
        answer: `<p id="arquitectura_img"></p>
        `,
      },
      {
        question: `Preprocesamiento`,
        answer: `<p id="process_img"></p>
        <p><li>Normalización</li>
        <li>Reducción de la dimensionalidad</li>
        <li>Combinación de variables</li></p>
        <h5>Datos electorales</h5>
        <p>Se procede a uniformizar las columnas (votos a cada partido) para todas las elecciones. Ello lo ejecutamos mediante el cuaderno <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/analisis_inicial_ine/2-Reforma_Resultado_secciones-s3.ipynb">Reforma_Resultado_secciones</a>, que básicamente crea las columnas para cada partido que no se ha presentado en cada elección. Posteriormente ordenamos las columnas de forma común, con lo que conseguimos una estructura igual para los cinco datasets, uno por cada elección.</p>
        <p>Para mejorar la interpretabilidad de los datos, introducimos los nombres de las CCAA, provincias y municipios donde se sitúa cada sección. Tomamos los datos de los ficheros de cada elección del Ministerio del Interior, y del INE. El hecho que ambos tengan distintos códigos para las comunidades autónomas ha sido una fuente de problemas. La inserción de estos nombres se lleva a cabo en el cuaderno <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/analisis_inicial_ine/3-Identificacion_Mun_Prov_CCAA-s3.ipynb">Identificacion_Mun_Prov</a>. A través de los tres cuadernos, los datos electorales ya están listos para unificar con los datos sociodemográficos.</p>
        <h5>Datos sociodemográficos</h5>
        <p> En el caso de <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/analisis_inicial_ine/4-Secciones_edades-s3.ipynb">Secciones_edades</a>, como se apunta en el el apartado anterior, la tarea principal para la preparación ha sido reducir la dimensionalidad a tramos de edad por sexos mediante pivot() con las Secciones censales como referencia para el merge posterior.</p>
        <p>Para los casos de <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/analisis_inicial_ine/5-Rentas-INE-s3.ipynb">Rentas_INE</a>, al ser información fruto de una estadística experimental, la labor de transformación se realizó sin tener un claro referente del valor de los resultados finales. Esto se debe a cierta dificultad a la hora de correlar algunos datos con otros datasets del proyecto, como la identificación de los territorios. Finalmente se extrae la información clara sobre municipios para su posible uso en la modelización.<p>
        <p>El caso de <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/analisis_inicial_ine/6-Distribucion_rentas_INE-s3.ipynb">Distribucion_rentas_INE</a> es el de la preparación de cómo se distribuyen las rentas según el origen de las mimas (salarios, pensiones, desempleo, etc...). Nuevo caso de estadística experimental donde se repiten circunstancias con el dataset anterior fruto de la disparidad de criterios en la codificación entre organismos públicos. Como en el caso de las rentas, el dataset queda preprocesado para su posterior uso.</p>
        <p>Para <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/analisis_inicial_ine/7-Afiliacion_SS_Paro-s3.ipynb">Afiliacion_SS_Paro</a> la labor ha consistido, como en el resto de casos, en transformar los datos a un formato que permita la correlación con los datos electorales, como variable objetivo. Cabe señalar que como sucede con otros datos económicos, la afiliación se circunscribe al territorio municipio: se procede a homologar dicha información para su posible posterior tratamiento en los modelos.</p>
        <h5>Combinación de variables</h5>
        <p>Una vez que tenemos preprocesados los datos de distinto tipo, debemos unificarlos en una sola base de datos, ya que todos ellos están referenciados en la práctica a las secciones censales. Ello lo llevamos a cabo en el cuaderno <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/analisis_inicial_ine/8-Unificacion-s3.ipynb">Unificación</a>. El proceso es relativamente simple: partiendo de los datos electorales vamos aplicado el método .merge() de pandas, tomado como columna de unión la del código de sección o del municipio.</p>
        <p>Dentro de este cuaderno creamos nuevas columnas que pensamos que nos serán útiles de cara a correlacionarlas con los datos electorales de cada sección. En su mayor parte se trata de ratios, no de datos absolutos, tales como porcentaje de censados por encima de los 64 años de edad. De esa forma obtenemos nuevos datos que son independientes del tamaño de cada sección. Obtenemos finalmente los datasets con los que podremos modelizar las secciones electorales, compuestos por cerca de 100 columnas.</p>
        <p>Hemos llevado a cabo el mismo proceso conjunto de tratamiento de datos con las provincias, aunque no hemos incluido los cuadernos al no tener gran interés, ya que finalmente no hemos utilizado los datasets obtenidos.</p>
        <h5>Preprocesamiento en Secciones Electorales</h5>
        <p>En el notebook <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/visualizaciones/Geopandas_Ejemplo-s3.ipynb">Geopandas_Ejemplo</a> se realiza un merge con los datasets correspondientes a cada elección que obtenemos del cuaderno Unificación, con lo que conseguimos una visualización por secciones, no solo de datos electorales, sino también sociodemográficos.</p>
        <p>Una utilidad de Geopandas es que proporciona métodos para hallar el centroide de cada sección. Con ese dato podemos determinar la sección equivalente de elección en elección, es decir, con qué sección en la elección, pongamos, de 2015, deberíamos comparar en la elección de 2016. El criterio es la mayor proximidad geográfica, dentro del mismo municipio o provincia. El dataframe de las equivalencias de cada sección a lo largo de las 5 elecciones lo hemos calculado en el cuaderno <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/analisis_inicial_ine/9-Evolucion_Secciones-s3-reducido.ipynb">Evolucion_Secciones</a>. Como se ha mencionado anteriormente, la confusión entre los códigos de las CCAA nos hizo variar el dataframe en el cuaderno <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/analisis_inicial_ine/10-Evoluci%C3%B3n_secciones_reformado.ipynb">Evolucion_Secciones_reforma</a>, que no es en la práctica más que la aplicación de un mapeo.</p>
        <p>En resumen, tras poner en marcha estos cuadernos estamos listos para determinar los modelos a un sinfín de variables objetivo que podemos definir.</p>
        <h5>Los datos del CIS</h5>
        <p>El dataset del Macrobarómetro del CIS de noviembre de 2019, cuenta con 146 columnas, que desde luego no nos parecen todas relevantes; nos centramos en aquellas que contienen valoraciones políticas de partidos o líderes, así como escalas de ubicación política tanto de los partidos como de los propios encuestados. Se han considerado algunos datos personales de estos últimos, tales como la edad. En total nos quedamos con unas 42 columnas. Como se trata de una prueba de concepto, hemos seleccionado las encuestas de solo una de las provincias, en este caso Málaga, por lo que consideramos unas 480 filas.</p>
        <p>Pasamos a modelizar la intención de voto declarada, presente en unas 370 filas, incluido aquellos que declaran que no irán a las urnas. Las 110 filas restantes se tendrán que estimar con el modelo ya definido. El preprocesado consiste principalmente en un mapeo de columnas categóricas a valores numéricos, un paso en su mayor parte bastante sencillo.</p>
        <h5>Preprocesamiento en redes sociales: Twitter</h5>
        <p>Con la ayuda de la librería snscrape descargamos tweets tanto de las semanas anteriores a las elecciones de abril como de las de noviembre de 2019.</p>
        <ol><ul>Abril 2019: 340210 Tweets detectados.</ul>
        <li>Hashtags buscados: </li>
        <ul>#28A, #ElDebateDecisivo, #ElDebateEnRTVE, #EleccionesGenerales28A,  #Elecciones28A , #EleccionesL6,  #Cs, #Ciudadanos, #VOX, #PSOE, #UnidasPodemos,  #PartidoPopular,  #PP, @vox_es, @PSOE, @populares,  @CiudadanosCs , @ahorapodemos </ul>
        <li>since:</li>
        <ul>2019-04-01 until:2019-04-29'</ul>
        <li>Noviembre 2019: Para noviembre realizamos dos búsquedas. </li>
        <ul>313913 Tweets detectados Hashtags electoral: </ul>
        <ul>'10N OR EleccionesNoviembre2019 OR eleccionesgenerales10N OR Elecciones10N OR 10Noviembre OR 10NElecciones OR  #Debate10N  </ul>
        <li>324803 Tweets detectados hashtags partidos: </li>
        <ul>#Cs, #Ciudadanos, #VOX, #PSOE, #UnidasPodemos,  #PartidoPopular,  #PP, @vox_es, @PSOE, @populares,  @CiudadanosCs , @ahorapodemos </ul>
        <li>since:</li>
        <ul>2019-10-15 until:2019-11-11'</ul>
        </ol>
        <p>Finalmente analizamos a modo de ejemplo los datos de Abril de 2019. 
        Los notebooks están en el github numerados y los datasets globales en el bucket correspondiente de S3.</p>
        <p><a target="_blank" rel="noopener noreferrer" href="http://electomedia.codx.tech/">Consultar el marco teórico desarrollado sobre el uso de Twitter</a></p>      
                `,
      },
      {
        question: `Modelado`,
        answer: `<p id="model_img"></p>
        <p>Hemos llevado a cabo una serie de modelizaciones a partir de los datasets de las distintas elecciones, con el objetivo de comprobar si los resultados tenían o no sentido. Afortunadamente, creemos de veras que estamos en el primer caso. En total se han probado ocho modelos, contenidos cada uno de ellos en un cuaderno, siete de ellos supervisados, y un octavo de clusterización. Muy brevemente, son los siguientes:<p>
<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/Modelizacion/Modelos/Modelo_RForest_Clasif_Diff_PP_PSOE.ipynb">RForest_Clasif_PP_PSOE</a>, como su nombre indica, desarrolla un modelo random forest de clasificación de la diferencia en porcentaje entre PP y PSOE en el dataset las elecciones de abril de 2019.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/Modelizacion/Modelos/Modelo_RForest_Regresion_Diff_PP_PSOE.ipynb">RForest_Regresion_PP_PSOE</a>, que modeliza la misma variable del mismo dataset que en cuaderno anterior, pero en esta ocasión mediante regresión.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/Modelizacion/Modelos/Modelo_SVM_Clasif_porcentaje_Vox_N19.ipynb">SVM_Clasif_porcentaje_Vox_N19</a>, tratándose de un modelo de support vector machines (SVM) de clasificación del porcentaje de voto de Vox en noviembre de 2019.
<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/Modelizacion/Modelos/Modelo_SVM_Regresion_porcentaje_Vox_N19.ipynb">SVM_Regresion_porcentaje_Vox_N19</a>, en esta ocasión aplicamos regresión a la misma variable que el cuaderno anterior.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/Modelizacion/Modelos/Modelo_RNeuronal_Clasif_dif_PodIU_PSOE_D15.ipynb">RNeuronal_Clasif_dif_PodIU_PSOE_D15</a>, en el que usamos una red neuronal para modelar la diferencia de voto entre, por un lado, la suma de Podemos e IU, y, por otro, el PSOE, en las elecciones de diciembre de 2015.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/Modelizacion/Modelos/Modelo_RNeuronal_Regresion_dif_PodIU_PSOE_D15.ipynb">RNeuronal_Regresion_dif_PodIU_PSOE_D15</a>, donde tratamos el mismo problema que en cuaderno anterior, en este caso mediante regresión.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/Modelizacion/Modelos/Modelo_Lasso_Regresion_Diff_PP_16_19.ipynb">Lasso_Regresion_diff_PP_16_19</a>, en el que implementamos una regresión lineal regularizada con Lasso para modelar la diferencia de voto al PP entre las elecciones de 2016 y la de abril de 2019.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/Modelizacion/Modelos/Modelo_Cluster_Santander.ipynb">Cluster_Santander</a>, donde tomamos las secciones electorales del municipio de Santander en los comicios de abril 2019 y aplicamos dos clusterizaciones, representándolas gráficamente mediante Geopandas.</li>
<p><h5>Estructura de los cuadernos</h5></p>
<p>Los siete modelos supervisados tienen la misma estructura. El primer paso es la definición de la variable objetivo, de las que, como se ve, hemos considerado unas pocas de las infinitas posibles. En el caso de clasificación hemos intentado crear una distribución de cinco posibles valores bastante balanceada. La definición de la variable objetivo en ocasiones es simplemente una de las columnas del dataset, como es el caso del porcentaje de voto de Vox, y en otros casos es más complicada, resultado por ejemplo de combinar dos datasets, como ocurre con la evolución del voto al PP entre 2016 y 2019.</p>
<p>El siguiente paso es la división del dataset entre train y test, cosa que efectuamos sin gran novedad. El tratamiento de train incluye: 1) la selección de las columnas que podemos llamar válidas, que no incluyen las del voto o porcentaje de voto a partidos, pues lo que queremos es modelizar según a los datos socioeconómicos; 2) la sustitución de los valores en NaN por la media de sus respectivas columnas; 3) el tratamiento de la columna categórica, que suele ser la provincia o la CCAA; 4) el análisis de la correlación entre columnas y la eliminación de algunas de ellas con un dato muy elevado; y 5) la selección de las filas con datos válidos en la columna objetivo. Esta misma serie de procesos, y en el mismo orden, se lleva a cabo en el dataset de test.</p>
<p>Antes de la modelización llevamos a cabo los tests de relevancia F-test y Mutual Information Regression para ver cuáles pueden ser las columnas más importantes. En todos los casos la columna geográfica (CCAA o provincia) es siempre de las más importantes, junto en general a las de renta per cápita y las de afiliación a la Seguridad Social. En el caso de los modelos de SVM tomamos directamente estas columnas para reducir el tiempo de ajuste. El último paso es la modelización para lo que utilizamos grid search, con los hiperparámetros principales, antes del ajuste (fit) definitivo. En muchos casos nos encontramos con casos claros de overfitting, con lo que tenemos que tomar otros valores y/o reducir el número de columnas, como ocurre en especial en el caso de los modelos de random forest.</p>
<p>En general los resultados los podemos considerar como aceptables. Los modelos de clasificación dan un accuracy cercano al 60%, frente al 20% que sería el que encontraríamos en el caso de una clasificación aleatoria. En los de regresión, el error generado suele estar en su mayoría en el entorno de la división estándar o por debajo. Los detalles de cada caso se pueden consultar, evidentemente, en cada cuaderno.</p>
<p>En el caso del cuaderno de la clusterización de las secciones de Santander, hemos aplicado varios modelos presentes en la librería de SKlearn, como KMeans. En el caso de DBSCAM no hemos tenido éxito en el modelo. Tras una clusterización según el voto, llevamos a cabo otra de acuerdo a los datos socioeconómicos que, de hecho, da resultados muy similares, lo que mostraría indiciariamente una correlación entre ambos conjuntos de variables.</p>
<h5>Modelización de territorios</h5>
<p>Uno de los objetivos iniciales de la práctica fin del bootcamp era la posibilidad de modelizar electoralmente un territorio amplio, pongamos una provincia, o incluso España entera, en función de una serie de territorios más pequeños, que podríamos suponer las secciones electorales. Creemos que hemos encontrado una manera relativamente sencilla de hacerlo, utilizando modelos de regresión lineal con o sin uso del método de PCA.</p>
<p>Hemos desarrollado esta parte de la práctica en dos cuadernos:</p>
<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/Modelizacion/Modelacion_territorio_secciones_LinReg_ZRZ.ipynb">Modelación_territorio_secciones_LinReg_ZRZ</a>, en el que modelizamos mediante regresión lineal la provincia de Zaragoza para las elecciones de noviembre de 2019, en base a un número muy reducido de secciones de la misma provincia (menos de 10), y luego utilizamos el modelo para estimar el voto en 2016.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/Modelizacion/Modelacion_territorio_secciones_PCA_Esp.ipynb">Modelación_territorio_secciones_PCA_Esp</a>, modelizando aquí toda España, mediante un pipeline con regresión lineal y PCA, en base a unas 66 secciones elegidas de nueve municipios, usando el modelo para estimar también el resultado en 2016.
</li>
<p>En ambos casos el número de secciones elegidas es un porcentaje muy reducido, menos de 1% y 0,2%, respectivamente, del total de cada territorio modelizado.</p>
<h6>Regresión lineal sin usar PCA</h6>
<p>Una de las incógnitas es la selección de las secciones que utilizaremos para modelizar. En esencia se trata de un proceso de reducción de dimensionalidad, o de selección de características. Ya que los parámetros que definen una elección son los votos a los distintos partidos, no tenemos más de 25-30 filas de datos; las columnas son todas las secciones, mucho más numerosas.</p>
<p>Nos hemos basado en que uno de los métodos para reducir dimensiones es el eliminar aquellas columnas muy correlacionadas entre sí. Lo que hacemos es, partiendo del territorio utilizado para modelizar, en nuestros dos casos la provincia de Zaragoza y 9 municipios españoles, ir eliminando las secciones que tengan una alta correlación entre ellas. Fijamos un umbral que no podrán sobrepasar en su correlación con las demás, por lo que nos quedamos con las secciones (columnas) que de verdad aporten información.</p>
<p>En el caso de Zaragoza fijamos un umbral exigente, lo que hace que encontremos apenas 7 secciones, que las utilizamos para modelizar mediane una simple regresión lineal toda la provincia, compuesta por 880 secciones. Los resultados para noviembre de 2019 son muy satisfactorios.</p>
<p>A continuación, utilizando el mismo modelo para predecir los resultados de Zaragoza en 2016, tomado esta vez las secciones equivalentes en esa elección a las 7 seleccionadas en 2019. La estimación de voto se acerca también bastante al resultado real.</p>
<h6>Regresión lineal utilizando PCA</h6>
<p>Para el caso de España la metodología ha de ser algo diferente. La razón es que se deben de tomar secciones de muchas CCAA, entre ellas las que tienen partidos nacionalistas o regionalistas. No resulta práctico calcular una matriz de correlaciones con las 36.000 secciones de todo el país, por lo que elegimos una serie de municipios pequeños que representen las CCAA nacionalistas, y algunas que no lo son.</p>
<p>Un problema adicional es que, al ser apenas 25-30 datos a estimar, no podemos utilizar un número semejante de columnas, pues estaríamos, si su número fuese superior, en ante un sistema de ecuaciones incompatible, o si fuese algo menor, ante un peligro claro de overfitting. Por otro lado, al ser el voto en las CCAA tan variado, sí que nos hace falta contar con la información de muchas secciones.</p>
<p>Esta dicotomía pensamos que se soluciona mediante el uso de la reducción de dimensionalidad de la PCA, que es lo que utilizamos para modelizar toda España. Partiendo de las 283 secciones de los 9 municipios, ponemos un umbral de correlación relativamente bajo, seleccionando 66 secciones, que pasamos a meter un pipeline con una regresión lineal y un PCA de 10 dimensiones. El modelo para 2019 resulta ser bastante bueno, y generaliza bien cuando lo probamos al estimar el voto en toda España en 2016.</p>
<p>Los detalles del proceso de modelización se pueden consultar en los respectivos cuadernos.</p>
<p>A modo de conclusión, creemos que tenemos un método de modelización bastante adecuado en general. Hemos probado a modelizar una provincia, como Zaragoza, usando secciones de otra, la de Burgos. En este caso comprobamos que, si bien el ajuste para 2019 era muy bueno, la generalización para 2016 resultó ser deficiente; la mejora de este proceso podría ser un siguiente paso a investigar.</p>
<h5>CIS Random Forest</h5>
<p>El trabajo de modelado en el <a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia/blob/main/otras_fuentes/CIS_N19_def-s3.ipynb">dataset del CIS</a> se inicia con la separación de las 370 filas entre train y test, y aplicamos un modelo random forest classifier, que ajustamos mediante grid search. Conseguimos un modelo con un accuracy en el dataset de test superior al 90%, evitando en principio pues el overfitting.</p>
<p>A continuación, aplicamos el modelo a las columnas que no declararon su intención de voto y así la estimamos. Ya teniendo la intención de voto de todos los encuestados, la comparamos con su recuerdo de voto en las elecciones de abril de 2019. Así podemos ver los cambios de voto respecto a esas elecciones de cara a noviembre de 2019, siendo esta nuestra predicción del resultado.</p>
<p>A modo de conclusión, la estimación no es muy precisa cuando se la compara con los resultados reales. Existe un sesgo a favor del PSOE y Ciudadanos, y en contra de PP y Vox. Con todo, esta misma desviación, casi en las mismas magnitudes, se dio en el sondeo del CIS para el conjunto de toda España, por lo que no pensamos que sea para estar insatisfecho. Quizás el punto más satisfactorio es que conseguimos modelizar la intención declarada de voto de una manera muy precisa. Los detalles del proceso de estimación se pueden consultar en el propio cuaderno.</p>
`,
      },
      {
        question: `Electomedia Lab`,
        answer: `<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/eesquivias/proyecto_electomedia">Repositorio de Github</a></li>
        `,
      },
      
    ],

  },
  plugins: [
        {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-111111111-1",
          head: true,
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-less`,
    ],
}


