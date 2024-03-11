/* eslint-disable camelcase */
/*
Se manejan las opciones que van a mostrar los select según lo que el usuario vaya eligiendo. Cuando se agreguen valores nuevos hay que modificar los switch y las tablas
*/

// Declaramos las opciones posibles
let tipologia = [];
const grupos = [
    '',
    '01 - APLICACIONES',
    '02 - INFRAESTRUCTURA ON PREMISE / CLOUD / DATAOPS',
    '03 - ASESORAMIENTO // GESTION // COMUNICACIONES Y CONTENIDO PARA LA ATENCIÓN',
    '04 - SOPORTE TECNICO (HARDWARE / SOFTWARE)',
    '05 - DEVOPS',
    // "06 - ANALISIS CREDITICIO",
    '07 - INFRAESTRUCTURA NETSECOPS ON PREMISE / CLOUD',
    '08 - PIPELINE CI / CD',
    '09 - TABLERO COMERCIAL (MENSUAL / REPORTE ANEXO)',
    '10 - TABLERO DE OBJETIVOS FIJOS (TOFi)',
    // "11 - RECLASIFICACIÓN DE GASTOS",
    '12 - INFORMACIÓN',
    '13 - OPERACIONES DE SISTEMAS / WORKLOAD AUTOMATION',
    '14 - RECLAMOS / INCIDENTES / SOLICITUDES',
    '15 - IDENTIDADES',
    '16 - PEOPLE',
    '17 - RED COMERCIAL',
    '18 - CORE ENVIRONMENTS',
    '19 - ADMINISTRACION DE FONDOS',
    '20 - SEGURIDAD y SALUD OCUPACIONAL (SySO) / SUSTENTABILIDAD',
    '21 - GESTION DE EGRESOS',
    // '22 - LOGÍSTICA',
    '23 - CRÉDITOS Y COBRANZAS',
    '24 - SOLUCIONES DE MERCHANTS',
    '25 - TECH ENABLERS',
    '26 - SOLUCIONES BACKOFFICE ONBO',
];

// ------- Listas que tienen relación con los grupos ------------------------

const tipo_1 = [
    '',
    '01.01 - REQUERIMIENTO / INCIDENTE DE FUNCIONALIDAD',
    '01.02 - CASOS OPERACIONES',
    '01.03 - GMAIL REQUERIMIENTO / INCIDENTE',
    '01.04 - CITRIX REQUERIMIENTO / INCIDENTE',
    '01.05 - OFFICE 365 REQUERIMIENTO / INCIDENTE',
    '01.06 - SLACK REQUERIMIENTO / INCIDENTE',
];
const tipo_2 = [
    '',
    '02.01 - REQUERIMIENTO',
    '02.02 - INCIDENTE',
    '02.03 - BACKUP',
];

const tipo_3 = [
    '',
    '03.01 - REQUERIMIENTO',
    '03.02 - COMUNICACIÓN / ACTUALIZACIÓN DE CONTENIDO PARA LA ATENCIÓN',
];
const tipo_4 = [
    '',
    '04.01 - CONFIGURACIONES',
    '04.02 - CABLEADO',
    '04.04 - PUESTO DE TRABAJO',
    '04.05 - IMPRESORA',
    '04.06 - EQUIPO / RECURSO / APLICACIÓN',
    '04.07 - DISPOSITIVOS DE CONECTIVIDAD MÓVIL 4G',
    // "04.08 - RECUPERAR ARCHIVOS",
    '04.09 - LINEA DE ALARMA',
    '04.10 - BACK-OFFICE SAP/GESTAR',
    '04.11 - TELEFONIA COMPORATIVA CISCO',
    '04.12 - TELEFONÍA CENTRO DE CONTACTO',
    '04.13 - TELEFONIA MOVIL',
];

const tipo_5 = ['', '05.01 - INCIDENTE', '05.02 - REQUERIMIENTO'];

const tipo_6 = ['', '06.01 - CONSULTA', '06.02 - PEDIDOS', '06.03 - RECLAMOS'];

const tipo_7 = [
    '',
    '07.01 - REQUERIMIENTO / INCIDENTE',
    '07.02 - CLOUD SECURITY ENGINEER',
    '07.03 - CNAME CLOUDFLARE',
];

const tipo_8 = ['', '08.01 - REQUERIMIENTO ', '08.02 - INCIDENTE'];

const tipo_9 = [
    '',
    '09.01 - TITULARES ',
    '09.02 - VENTAS',
    '09.03 - MEDIUM MERCHANTS',
    '09.04 - SMALL MERCHANTS',
    // "09.05 - INDICADOR COMERCIOS ACTIVOS",
];

const tipo_10 = ['', '10.01 - CREAR NUEVO PEDIDO'];

// const tipo_11 = ["", "11.01 - CREAR NUEVO PEDIDO"];

const tipo_12 = ['', '12.01 - INFORMACIÓN HISTÓRICA'];

const tipo_13 = [
    '',
    '13.01 - ALTA, BAJA O MODIFICACIONES DE JOBS',
    '13.02 - PEDIDO A OPERACIONES DE SISTEMAS',
];

const tipo_14 = [
    '',
    '14.01 - MERCHANTS: ADQUIRENCIA / TOQUE',
    // "14.02 - TOQUE",
    '14.03 - CARDS & DELIVERY',
    '14.04 - TERMINALES',
    '14.05 - RANTY',
    // '14.06 - REGISTRO EVENTO NOC',
    '14.07 - CORE BANKING',
    '14.08 - TARJETA DE CRÉDITO IN APP',
    '14.09 - PROMOCIONES CON TARJETA DE DÉBITO',
];

const tipo_15 = [
    '',
    '15.01 - AZURE AD (Nuevas Federaciones y pedidos generales)',
    '15.02 - HABILITACIONES',
    '15.03 - AWS',
    '15.04 - MAMBU',
    '15.05 - BLANQUEO DE CLAVES',
    '15.06 - IDENTIDADES PRIVILEGIADAS',
    '15.07 - GCP',
    '15.08 - GSUITE',
    '15.09 - AZURE',
    '15.10 - AUTH0',
    '15.11 - INCONVENIENTES',
    '15.12 - EXCEPTUAR MFA',
    '15.13 - CRM',
    '15.14 - ERP',
    '15.15 - BONX',
    '15.16 - MODIFICACIÓN DE APROBADOR IDENTITY POR EXCEPCIÓN',
    '15.17 - BAJA DE LICENCIA',
    '15.18 - SPLIT',
    '15.19 - FIREBASE',
    '15.20 - SNOWFLAKE',
    '15.21 - CUENTAS INVITADAS AZURE AD',
    '15.22 - ALTA DE SNOWFLAKE DE BIOCATCH',
    '15.23 - IDN - CAMBIO DE CICLO DE VIDA DE COLABORADORES',
    '15.24 - BASE DE DATOS ON PREMISE',
    '15.25 - GESTION SOBRE USUARIOS PAGINA DE ABOGADOS',
    '15.26 - CREACION DE CERTIFICADOS',
];

const tipo_16 = [
    '',
    '16.01 - MIS BENEFICIOS',
    '16.02 - MIS FINANZAS',
    '16.03 - MI EQUIPO',
    '16.04 - MIS AUSENCIAS',
    '16.05 - MIS TRÁMITES',
    '16.06 - MIS HERRAMIENTAS',
    '16.07 - INNOVACIÓN SOCIAL',
    '16.08 - DIVERSIDAD',
    '16.09 - TALENT MATCH',
    '16.10 - MI APRENDIZAJE',
];

const tipo_17 = ['', '17.01 - COMERCIOS ACTIVOS'];

const tipo_18 = ['', '18.01 - CLOUD', '18.02 - ON PREMISE'];

const tipo_19 = [
    '',
    '19.01 - COMPENSACIONES CAJAS',
    '19.02 - HABILITACIONES',
    '19.03 - TRANSPORTE DE CAUDALES',
    '19.04 - COMPENSACIONES TASI-BRM',
    '19.05 - AJUSTES INTERNOS DE GESTION DE PRODUCTOS',
    '19.06 - PARAMETROS DEL FONDO DE GASTOS',
];

const tipo_20 = [
    '',
    '20.01 - SEGURIDAD LABORAL',
    '20.02 - SOLICITUD DE GRABACIONES',
    '20.03 - ACTUALIZACIÓN DE DATOS PARA CENTRAL DE MONITOREO',
    '20.04 - SEGURIDAD FÍSICA',
    '20.05 - HUELLA DE CARBONO (SUSTENTABILIDAD)',
];
const tipo_21 = [
    '',
    '21.01 - ABM DE PROVEEDORES',
    '21.02 - FONDOS FIJOS',
    '21.03 - LUZ',
    '21.04 - COBERTURA DE AUTORIZADOR',
    '21.05 - DEVOLUCION DE RETENCIONES',
];

const tipo_22 = ['', '22.01 - PEDIDOS ADICIONALES'];

const tipo_23 = [
    '',
    '23.01 - EXTRAJUDICIAL [456]',
    // '23.03 - MORA TEMPRANA [458]',
    // '23.04 - EQUIPO DE MEJORA CONTINUA [200]',
    // '23.05 - JUDICIAL [457]',
];

const tipo_24 = [
    '',
    '24.01 LISTA PRECIOS',
    '24.02 LOCALES',
    '24.03 REQUERIMIENTOS ACCIONES COMERCIALES',
    '24.04 TASI',
    '24.05 ABOGADOS',
    '24.06 BANCOS',
    '24.07 COMPLIANCE',
    '24.08 FRAUDE',
    '24.09 MONTO MAXIMO',
    '24.10 BONIFICACIONES TITULARES',
    '24.11 ABM COMERCIOS AMIGOS',
    '24.12 ABM LARGE',
];

const tipo_25 = [
    '',
    '25.01 AUTOMATIONS',
    '25.02 FINANCES & OPERATIONS',
    '25.03 CONCILIATIONS',
    '25.04 TRANSACTIONAL DATA',
    '25.05 COMPLIANCE SOLUTIONS',
];

const tipo_26 = [
    '',
    '26.01 ONBOARDING',
];
// ------------------------------------------------------------------------------
// ---------- Listas de pedidos que tienen relación con los tipos ---------------
// ------------------------------------------------------------------------------

const pedido_1_1 = [
    '',
    '01.01.01 - DATOS DE CUENTAS Y LIMITES',
    '01.01.02 - LIQUIDACION, PAGO Y CAMBIOS SOBRE CA',
    '01.01.04 - INTRANET, META4, AVISOS TRANSACCIONALES y SAP',
    '01.01.05 - COBRANZAS, CAJAS Y MORA',
    // '01.01.06 - DYNAMICS (CONTABILIDAD, IMPUESTOS, COMPRAS E INVENTARIO)',
    // '01.01.09 - PROCESAMIENTO DE CUPONES, PRESTAMOS, DEBITOS AUTOMATICOS CORE, SNC',
    '01.01.10 - VENTA Y BAJA DE PRODUCTOS',
    '01.01.11 - GEN - DATOS, MONTOS, PAGOS, TARJETAS Y CONSUMOS',
    '01.01.12 - CODIGOS DE AUTORIZACION, COMPRAS/EXTRACCIONES',
    // '01.01.13 - BCRA, NORMATIVAS Y VIGIA',
    // "01.01.14 - APERTURAS",
    // "01.01.15 - CONTROL-M / WORKLOAD",
    '01.01.16 - BOTMAKER',
    '01.01.18 - LOGISTICA (DELIVERY)',
    // '01.01.19 - ROBOTIC PROCESS AUTOMATION',
    // "01.01.20 - PRODUCCION DE TARJETAS (PLASTICOS)",
    // "01.01.21 - NX SUITE",
    '01.01.22 - NX SUITE',
    '01.01.23 - BONX',
    '01.01.24 - CRM CUSTOMER SERVICE',
    '01.01.25 - GDD, TURNERO',
    '01.01.26 - ACQUIER PROCESSING',
];

const pedido_1_2 = ['', '01.02.01 - CASOS ONBOARDING', '01.02.02 - CASOS CRM'];

const pedido_1_3 = [
    '',
    '01.03.01 - GESTIÓN DE USUARIOS',
    '01.03.02 - GESTIÓN DE GRUPOS / LISTAS DE DIFUSIÓN',
    '01.03.03 - GESTIÓN DE CUENTAS DE SERVICIO',
    '01.03.04 - GESTIÓN DE MAILS / CORREOS',
    '01.03.05 - GESTIÓN DE EVENTOS',
    '01.03.06 - GESTIÓN DE MEETS',
    '01.03.07 - GESTIÓN DE SALAS Y COCHERAS',
    '01.03.08 - GESTIÓN DE UNIDADES COMPARTIDAS',
    '01.03.09 - GESTIÓN DE ARCHIVOS DE DRIVE',
    '01.03.10 - DRIVE FOR DESKTOP',
    '01.03.11 - GOOGLE / REQ. ESPECÍFICO',
    '01.03.12 - GMAIL / REQ. ESPECÍFICO',
    '01.03.13 - CALENDAR / REQ. ESPECÍFICO',
    '01.03.14 - MEETS / REQ. ESPECÍFICO',
    '01.03.15 - DRIVE / REQ. ESPECÍFICO',
];

const pedido_1_4 = [
    '',
    '01.04.01 - INCIDENTE EN SUCURSALES (CITRIX)',
    '01.04.02 - INCIDENTE EN HOMEOFFICE (CITRIX)',
    '01.04.03 - CITRIX / REQ. ESPECÍFICO',
];

const pedido_1_5 = [
    '',
    '01.05.01 - LICENCIA DE OFFICE 365',
    '01.05.02 - MSFT / REQ. ESPECÍFICO',
];

const pedido_1_6 = [
    '',
    '01.06.01 - GESTIÓN DE USUARIOS',
    '01.06.02 - GESTION DE GRUPOS',
    '01.06.03 - GESTIÓN DE CANALES',
    '01.06.04 - GESTIÓN DE WORKSPACES',
    '01.06.05 - GESTIÓN DE APLICACIONES',
    '01.06.06 - SLACK / REQ. ESPECÍFICO',
];

const pedido_2_1 = [
    '',
    '02.01.01 - BASES DE DATOS',
    '02.01.01 - COLAS MQ',
    '02.01.02 - CLOUDOPS / DEVOPS',
    '02.01.03 - DATAOPS TARJETA',
    '02.01.04 - DATAOPS FINANCIERA',
    '02.01.05 - SERVIDORES',
    '02.01.06 - STORAGE',
];

const pedido_2_2 = [
    '',
    '02.02.01 - BASES DE DATOS',
    '02.02.01 - COLAS MQ',
    '02.02.01 - SERVIDORES',
    '02.02.01 - STORAGE',
    '02.02.02 - CLOUDOPS / DEVOPS',
    '02.02.03 - DATAOPS TARJETA',
    '02.02.04 - DATAOPS FINANCIERA',
];

const pedido_2_3 = [
    '',
    '02.03.01 - ALTA DE BACKUP',
    '02.03.02 - BAJA DE BACKUP',
    '02.03.03 - MODIFICACION DE BACKUP',
    '02.03.04 - ERROR DE BACKUP',
    '02.03.05 - RESTORE',
];

const pedido_3_1 = [
    '',
    '03.01.01 - ASESORAMIENTO NORMATIVO',
    '03.01.02 - GESTION IMPUESTO AL SELLO',
];

const pedido_3_2 = [
    '',
    '03.02.01 - NUEVO CONTENIDO/LANZAMIENTO',
    '03.02.02 - MODIFICACION DE CONTENIDO EXISTENTE/ACTUALIZACION BASE DE CONOCIMIENTOS',
    '03.02.03 - CONTINGENCIA/EVENTO NEGOCIO',
];
const pedido_4_1 = [
    '',
    '04.01.01 - SOPORTE PARA CONFIGURAR APLICACION',
    '04.01.02 - SOPORTE PARA CONFIGURAR DISPOSITIVO',
];

const pedido_4_2 = [
    '',
    '04.02.01 - NUEVO CABLEADO',
    '04.02.02 - REPARAR CABLEADO',
];

const pedido_4_4 = ['', '04.04.01 - MUDANZA DE PUESTO'];

const pedido_4_5 = [
    '',
    '04.05.01 - RETIRO DE TONER IMPRESORA LEXMARK',
    '04.05.02 - IMPRESORA - ERROR DE CONFIGURACIÓN',
    '04.05.03 - IMPRESORA - ERROR FÍSICO',
    '04.05.04 - ASISTENCIA TECNICA LEXMARK',
];

const pedido_4_6 = [
    '',
    '04.06.01 - NUEVO ACCESORIO / INSUMO',
    '04.06.02 - NUEVO EQUIPO INFORMÁTICO',
    '04.06.03 - INSTALACIÓN DE SOFTWARE',
    '04.06.04 - NUEVO SITIO COLABORATIVO SHAREPOINT',
    '04.06.05 - NUEVO DISCO PARA MI AREA',
    '04.06.06 - NUEVO GRUPO DE DIFUSION (MAIL)',
    '04.06.07 - TENGO UN INCONVENIENTE CON MI EQUIPAMIENTO',
    '04.06.08 - TENGO UN INCONVENIENTE CON VIDEO WALL',
];

const pedido_4_7 = [
    '',
    '04.07.01 - NUEVO DISPOSITIVO 4G',
    '04.07.02 - CAMBIO DE PLAN DE DATOS / RECARGA DE DATOS',
    '04.07.03 - BAJA DE DISPOSITIVO',
    '04.07.04 - INCONVENIENTES CON EL MODEM',
];

// const pedido_4_8 = ["", "04.08.01 - ARCHIVOS O CARPETAS PERSONALES"];

const pedido_4_9 = [
    '',
    '04.09.01 - TENGO INCONVENIENTE CON LA LINEA DE ALARMA (LOCALES)',
];

const pedido_4_10 = [
    '',
    '04.10.01 - ALTA DE TIPOLOGÍA',
    '04.10.02 - BAJA DE TIPOLOGÍA',
    '04.10.03 - MODIFICACIÓN DE TIPOLOGÍA',
    '04.10.04 - ABM DÍAS NO LABORABLES',
];

const pedido_4_11 = [
    '',
    '04.11.01 - NUEVO USUARIO DE TELEFONÍA',
    '04.11.02 - MODIFICAR USUARIO DE TELEFONÍA',
    '04.11.03 - BAJA DE USUARIO DE TELEFONIA',
    '04.11.04 - PERMISOS LLAMADAS INTERNACIONALES',
    '04.11.05 - INSTALACIÓN CISCO JABBER',
    '04.11.06 - CONFIGURACIÓN CISCO JABBER',
];

const pedido_4_12 = [
    '',
    '04.12.01 - NUEVO USUARIO (AVAYA)',
    '04.12.02 - MODIFICAR USUARIO (AVAYA)',
    '04.12.03 - BAJA DE USUARIO (AVAYA)',
    '04.12.04 - PEDIDOS',
    '04.12.05 - INCONVENIENTES / FALLAS',
    '04.12.06 - CAPACITACIONES',
    '04.12.07 - MODIFICACIÓN EN IVR',
    '04.12.08 - OTROS PROYECTOS',
];

const pedido_4_13 = [
    '',
    '04.13.01 - NUEVA LÍNEA TELEFÓNICA / TELÉFONO MÓVIL',
    '04.13.02 - PEDIDO DE SERVICIO TÉCNICO PARA TELEFONÍA MÓVIL',
    '04.13.03 - CAMBIO DE TELÉFONO MÓVIL',
    '04.13.04 - BAJA DE LÍNEA / TELÉFONO MÓVIL',
    '04.13.05 - PÉRDIDA / ROBO EQUIPO TELEFÓNICO',
    '04.13.06 - CAMBIO DE PLAN TELEFONÍA MÓVIL',
];

const pedido_5_1 = ['', '05.01.01 - TARJETA', '05.01.02 - FINANCIERA'];

const pedido_5_2 = ['', '05.02.01 - TARJETA', '05.02.02 - FINANCIERA'];

const pedido_6_1 = [
    '',
    '06.01.01 - RESPUESTAS DE SAP',
    '06.01.02 - RESPUESTAS DE INCIDENTES',
    '06.01.03 - ESTADO DE LA GESTION: CONSULTA SI SE ENCUENTRA APROBADA O RECHAZADA',
    '06.01.04 - ESTADO DE LA GESTION: CONSULTA EN QUE INSTANCIA SE ENCUENTRA',
    '06.01.05 - ESTADO DE LA GESTION: MOTIVO POR EL CUAL SE RECHAZA',
    '06.01.06 - POR PROCEDIMIENTO: TIEMPOS DE GESTION',
    '06.01.07 - POR PROCEDIMIENTO: TIPOLOGIAS DE SAP',
    '06.01.08 - POR PROCEDIMIENTO: OTROS',
];

const pedido_6_2 = [
    '',
    '06.02.01 - VERIFICAR GESTION: POR MOTIVO DE RECHAZO',
    '06.02.02 - VERIFICAR GESTION: YA ENVIE LO SOLICITADO',
    '06.02.03 - AGILIZAR CIRCUITO: ES UNA EXCEPCION PARA EL CLIENTE',
    '06.02.04 - PEDIDO DE PASE DE CUENTA DE EMPLEADO: GALICIA',
    '06.02.05 - PEDIDO DE PASE DE CUENTA DE EMPLEADO: NARANJA X',
    '06.02.06 - ARREGLO DE GESTIONES DE SEGURIDAD CREDITICIA: RECHAZO DE APERTURA',
    '06.02.07 - PEDIDO ESPECIAL CON AUTORIZACION DE GERENTE: OTROS',
    '06.02.08 - AUMENTO DE LIMITES PARA COLABORADOR',
    '06.02.09 - APERTURAS DE CUENTA Y AUMENTO DE LIMITES PARA CLIENTES NCP',
];

const pedido_6_3 = [
    '',
    '06.03.01 - PENDIENTE O DEMORA: EL TIEMPO DE RESOLUCION YA SE CUMPLIO Y NO TENGO RESPUESTA',
    '06.03.02 - CIERRE DE SAP O INCIDENTE INCORRECTO: EL CIERRE DEL INCIDENTE NO CONTESTA LO PLANTEADO',
];

const pedido_7_1 = [
    '',
    '07.01.01 - NETSECOPS',
    '07.01.02 - NETSECOPS SUCURSALES',
];

const pedido_7_2 = [
    '',
    '07.02.01 - SOLICITUD DE SOPORTE DE INFRAESTRUCTURA',
    '07.02.02 - SOLICITUD DE SOPORTE DE ALERTAS',
];

const pedido_7_3 = ['', '07.03.01 - NUEVO PEDIDO DE CNAME CLOUDFLARE'];

const pedido_8_1 = ['', '08.01.01 - WIRU', '08.01.02 - FINANCIERA'];

const pedido_8_2 = ['', '08.02.01 - WIRU', '08.02.02 - FINANCIERA'];

const pedido_9_1 = [
    '',
    '09.01.01 - TITULARES - APERTURAS TARJETA',
    '09.01.02 - TITULARES - ADICIONALES',
    '09.01.03 - TITULARES - $ FACTURACIÓN DE SEGUROS',
    '09.01.04 - TITULARES - MAMS',
    '09.01.05 - TITULARES - PAGO RESUMEN IN APP',
    '09.01.06 - TITULARES - SOLUCIONES DE COBRO',
    '09.01.07 - TITULARES - LVC - ATENCIÓN',
    '09.01.08 - TITULARES - CONSULTA SOBRE METAS/ANEXO',
    '09.01.09 - TITULARES - GASTOS DE SUCURSAL',
    // '09.01.10 - TITULARES - COMERCIOS ACTIVOS',
    // '09.01.11 - TITULARES - PAGO RESUMEN IN APP',
    // '09.01.12 - TITULARES - ALTA SEGUROS',
];

const pedido_9_2 = [
    '',
    '09.02.01 - VENTAS - APERTURAS TARJETA',
    '09.02.02 - VENTAS - SOLUCIONES DE COBRO',
    '09.02.03 - VENTAS - PRODUCTOS PERSISTENTES',
    '09.02.04 - VENTAS - ALTAS DE CUENTA',
    '09.02.05 - VENTAS - GASTOS DE VENTA',
    // '09.02.08 - VENTAS - APERTURAS TARJETA',
];

const pedido_9_3 = [
    '',
    '09.03.01 - MEDIUM MERCHANTS - TPV',
    '09.03.02 - MEDIUM MERCHANTS - GASTOS DE MERCHANTS',
];

const pedido_9_4 = [
    '',
    '09.04.01 - SMALL MERCHANTS - MAMS',
    '09.04.02 - SMALL MERCHANTS - SOLUCIONES DE COBRO',
    '09.04.03 - SMALL MERCHANTS - GASTOS DE MERCHANTS',
];

// const pedido_9_5 = [
//   "",
//   "09.05.01 - ASESORES DE SUCURSALES",
//   "09.05.02 - ASESORES DE SMALL",
//   "09.05.03 - ASESORES DE MEDIUM",
// ];

const pedido_10_1 = [
    '',
    '10.01.01 - TOFi - MEDIUM MERCHANTS',
    '10.01.02 - TOFi - SMALL MERCHANTS',
];

// const pedido_11_1 = [
//   "",
//   "11.01.01 - RECLASIFICACIÓN DE GASTOS - ÁREA INTERNA",
//   "11.01.02 - RECLASIFICACIÓN DE GASTOS - RED COMERCIAL",
// ];

const pedido_12_1 = [
    '',
    '12.01.01 - INFORMACION HISTORICA DE CLIENTES',
    '12.01.05 - INFORMACION HISTORICA DE CLIENTES (TITULAR DIFUNTO)',
    '12.01.02 - LIQUIDACION DE COMERCIOS',
    '12.01.06 - ARCHIVOS DE CONCILIACION / DEBITOS AUTOMATICOS / OTROS',
    // "12.01.03 - OTROS ARCHIVOS DE COMERCIOS (CME, CPA, CAM)",
    // "12.01.04 - RECUPERAR ARCHIVOS DE COMERCIOS",
];

const pedido_13_1 = [
    '',
    '13.01.01 - ABM DE JOBS',
    '13.01.02 - AGREGAR JOBS A SELF SERVICE CONTROL-M',
];

const pedido_13_2 = [
    '',
    '13.02.01 - RESTORES',
    '13.02.02 - DESPLIEGUE SOPORTE',
    '13.02.03 - DESPLIEGUE DESACORE',
    '13.02.04 - COPIAS',
    '13.02.05 - ACCIÓN SOBRE JOBS EN PRODUCCIÓN',
    '13.02.06 - APERTURAS DE CLAVES',
    '13.02.07 - CAMBIOS EN PARAMETROS (ABMPAR)',
    '13.02.08 - PEDIDOS ADICIONALES',
    '13.02.09 - ALTA DE LOCALES',
];

const pedido_14_1 = [
    '',
    '14.01.01 - DIGITAL ASISTIDO',
    '14.01.02 - DIGITAL AUTOGESTION',
    '14.01.03 - WEB TOQUE',
    '14.01.04 - REVENTA TOQUE',
    '14.01.05 - GESTOR DE PROMOCIONES',
    '14.01.06 - BONX',
    '14.01.07 - NOLCA',
    '14.01.08 - COMERCIOS NARANJA X',
];

// const pedido_14_2 = [
//   "",
//   "14.02.01 - REVENTA",
//   // "14.02.02 - RED COMERCIAL",
//   // "14.02.03 - PROMOCIONES",
// ];

const pedido_14_3 = [
    '',
    // "14.03.01 - APERTURA / ORIGINACION DE TARJETAS",
    '14.03.02 - EMBOZADO DE TARJETAS',
    "14.03.03 - LOTEOS",
    "14.03.04 - OTRAS MARCAS",
];

const pedido_14_4 = [
    '',
    '14.04.01 - RETENCIÓN/DEVOLUCIÓN DE DINERO',
    '14.04.02 - INSTALACION/REUBICACION DE TERMINALES',
    '14.04.03 - GESTIÓN DE REPUESTOS O PIEZAS',
    '14.04.04 - CONFIGURACIÓN DE CASSETERAS POR DENOMINACIÓN DE BILLETES',
];

const pedido_14_5 = ['', '14.05.01 - INCIDENTE'];

const pedido_14_6 = ['', '14.06.01 - NUEVO REGISTRO EVENTO NOC'];

const pedido_14_7 = ['', '14.07.01 - PEDIDO DE CORE BANKING'];

const pedido_14_8 = [
    '', 
    '14.08.01 - NO INGRESA A LA SECCIÓN TARJETAS',
    '14.08.02 - NO INGRESA A LA SECCIÓN TARJETA DE CRÉDITO',
    '14.08.03 - NO PUEDE ACTIVAR TARJETAS FÍSICAS',
    '14.08.04 - NO INGRESA A LA SECCIÓN TC VIRTUAL O NO LA VISUALIZA',
    '14.08.05 - LÍMITES Y DISPONIBLES',
    '14.08.06 - CONSUMOS RECIENTES',
    '14.08.07 - PRÓXIMOS VENCIMIENTOS',
    '14.08.08 - RESÚMENES ANTERIORES',
    '14.08.09 - TUS TARJETAS',
    '14.08.10 PAGO DE RESUMEN',
    '14.08.11 ADICIONALES EN NX SUITE',
];

const pedido_14_9 = [
    '', 
    '14.09.01 - NUEVAS PROMOCIONES CON TARJETA DE DÉBITO',   
];

const pedido_15_1 = [
    '',
    '15.01.01 - NUEVA FEDERACIÓN',
    '15.01.02 - MODIFICACIÓN DE FEDERACIÓN (scopes, URIs, etc)',
];

const pedido_15_2 = [
    '',
    '15.02.01 - USUARIO DE SERVICIO ACTIVE DIRECTORY',
    '15.02.02 - ALTA DE STA PARA COMERCIOS',
    '15.02.03 - NUEVO COMPONENTE UNIX - DESTINATARIO DE MAIL',
    '15.02.04 - ACCESOS A DISCOS O CARPETAS',
    '15.02.05 - AVAYA (AGENTE)',
    '15.02.06 - AVAYA (CMS SUPERVISOR)',
    '15.02.07 - DFINDER',
    // '15.02.08 - DYNAMICS AX',
    '15.02.09 - GESTAR',
    // "15.02.10 - APLICACIONES BCRA",
    '15.02.11 - TELESOFT',
    // '15.02.12 - PECTRA (SSG)',
    '15.02.13 - PROMOCIONES CA',
    '15.02.14 - BATCH',
    '15.02.15 - ICBC',
    '15.02.16 - MASTER',
    '15.02.17 - ONLINE',
    '15.02.18 - SAP',
    '15.02.19 - VISA',
    '15.02.20 - ENROLAMIENTO DE HUELLAS',
    // "15.02.21 - INTERBANKING (ALTA DE CUENTA)",
    '15.02.22 - INTERBANKING (ALTA DE ESQUEMAS)',
    '15.02.23 - INTERBANKING (ALTA DE COLABORADORES)',
    '15.02.24 - VAULT',
    '15.02.25 - LÍMITE MERCAP - UNITRADE',
    // "15.02.26 - LÍMITES UNITRADE",
    '15.02.27 - PERMISOS STA - PREFIJOS',
    '15.02.28 - SERVICE POINT (FISERVSERVICEPOINT)',
    '15.02.29 - META4',
    '15.02.30 - WEB CENTER - VPRINT - VNET',
    '15.02.31 - MODIFICACIÓN PERMISOS ROLES MERCAP TR/UT',
    '15.02.32 - CONSULTAS ROLES/USUARIOS MERCAP TR/UT y SIOPEL',
    '15.02.33 - USUARIOS DE SERVICIOS EN APLICACIONES',
    '15.02.34 - LICENCIA DE MIRO',
];

const pedido_15_3 = [
    '',
    '15.03.01 - BAJA DE CUENTA DE AWS',
    '15.03.02 - GESTIÓN DE ROLES AWS',
    '15.03.03 - FINTECH - CREACIÓN DE USUARIO PROGRAMÁTICO',
    '15.03.04 - AWS PERMISOS EKS FINTECH',
    '15.03.05 - TARJETA NARANJA - CREACIÓN DE USUARIO PROGRAMÁTICO',
    '15.03.06 - SFTP AWS FINANCIERA',
    '15.03.07 - ABM DE USUARIOS DE SERVICIO RDS',
];

const pedido_15_4 = [
    '',
    '15.04.01 - ACTUALIZAR ROL MAMBU',
    '15.04.02 - USUARIO API O WEBHOOK',
];

const pedido_15_5 = [
    '',
    '15.05.01 - BLANQUEO BACKEND NPOS',
    '15.05.02 - BLANQUEO VISA',
    '15.05.03 - BLANQUEO INTERBANKING',
    '15.05.04 - BLANQUEO TELESOFT',
    '15.05.05 - BLANQUEO MASTER',
    '15.05.06 - BLANQUEO STA CA',
    '15.05.07 - BLANQUEO SAP',
    '15.05.08 - BLANQUEO ICBC',
    '15.05.09 - BLANQUEO APPLE STORE CONECT',
    '15.05.10 - BLANQUEO DEVELOPER PORTAL',
    '15.05.11 - BLANQUEO AVAYA',
    '15.05.12 - BLANQUEO CREDIWARE',
    '15.05.13 - BLANQUEO IDEAR',
    '15.05.14 - BLANQUEO REDMOB',
    '15.05.15 - BLANQUEO REDSHIFT',
    '15.05.16 - BLANQUEO VPRINT',
    '15.05.17 - BLANQUEO DE USUARIO SFTP (AWS)',
    '15.05.18 - BLANQUEO BIOCACH',
    '15.05.19 - BLANQUEO CLAVE ORANARANJA',
];

const pedido_15_6 = [
    '',
    '15.06.01 - PAM - SOLICITUD DE ENSOBRADO DE CLAVES',
    '15.06.02 - PAM - SOLICITUD DE CONFIGURACIÓN DE SERVIDOR CRITICO',
];

const pedido_15_7 = [
    '',
    '15.07.01 - CREACIÓN DE PROYECTOS GCP',
    '15.07.02 - ASIGNACIÓN DE PERMISOS GCP',
];

const pedido_15_8 = [
    '',
    '15.08.01 - CREACIÓN DE LISTAS DE DISTRIBUCIÓN EN GSUITE',
    '15.08.02 - MODIFICACIÓN DE LISTAS DE DISTRIBUCIÓN EN GSUITE',
];

const pedido_15_9 = [
    '',
    '15.09.01 - CREAR SUSCRIPCIÓN',
    '15.09.02 - ASIGNACIÓN DE PERMISOS SOBRE SUSCRIPCIÓN',
];

const pedido_15_10 = [
    '',
    '15.10.01 - APP/B2C - CREACIÓN',
    '15.10.02 - APP/B2C - MODIFICACIÓN',
];

const pedido_15_11 = ['', '15.11.01 - TENGO UN INCONVENIENTE'];

const pedido_15_12 = ['', '15.12.01 - NUEVO PEDIDO DE EXCEPTUAR MFA'];

const pedido_15_13 = [
    '',
    '15.13.01 - ALTA DE NUEVO ROL CRM',
    '15.13.02 - MODIFICACIÓN DE ROL CRM',
    '15.13.03 - BAJA ROL CRM',
];
const pedido_15_14 = [
    '',
    '15.14.01 - ALTA DE NUEVO ROL ERP',
    '15.14.02 - MODIFICACIÓN DE ROL ERP',
    '15.14.03 - BAJA ROL ERP',
];

const pedido_15_15 = [
    '',
    '15.15.01 - ALTA DE NUEVO ROL BONX',
    '15.15.02 - MODIFICACIÓN DE ROL BONX',
    '15.15.03 - BAJA ROL BONX',
];

const pedido_15_16 = [
    '',
    '15.16.01 - PEDIDO DE MODIFICACIÓN DE APROBADOR IDENTITY POR EXCEPCIÓN',
];

const pedido_15_17 = [
    '',
    '15.17.01 - BAJA LICENCIA JIRA',
    '15.17.02 - BAJA LICENCIA CONFLUENCE',
    '15.17.03 - BAJA LICENCIA SPLIT',
    '15.17.04 - BAJA LICENCIA POSTMAN',
    '15.17.05 - BAJA LICENCIA OPSGENIE',
];

const pedido_15_18 = [
    '',
    '15.18.01 - ALTA DE NUEVO ESPACIO',
    '15.18.02 - ALTA DE NUEVAS API KEY',
];

const pedido_15_19 = [
    '',
    '15.19.01 - CREACIÓN DE PROYECTO FIREBASE',
    '15.19.02 - MODIFICACIÓN DE PROYECTO FIREBASE',
    '15.19.03 - BAJA DE PROYECTO FIREBASE',
];

const pedido_15_20 = [
    '',
    '15.20.01 - ALTA DE NUEVOS ROLES',
    '15.20.02 - MODIFICACIÓN DE ROLES',
    '15.20.03 - BAJA DE ROLES',
    '15.20.04 - CAMBIAR AUTORIZADOR DE UN ROL',
    '15.20.05 - PROBLEMAS DE SINCRONIZACIÓN DE ROLES',
    '15.20.06 - ALTA DE USUARIOS DE SERVICIO',
    '15.20.07 - BAJA DE USUARIOS',
];

const pedido_15_21 = [
    '',
    '15.21.01 - CUENTAS INVITADAS PARA COMPARTIR TABLEROS DE POWER BI',
];

const pedido_15_22 = [
    '',
    '15.22.01 - ALTA DE USUARIO SNOWFLAKE DE BIOCATH',
    '15.22.02 - BAJA DE USUARIO SNOWFLAKE DE BIOCATH',
];

const pedido_15_23 = [
    '',
    '15.23.01 - BAJA DE COLABORADORES INTERNOS Y TERCERIZADOS CON FECHA ANTERIOR AL DÍA DE CARGA.',
    '15.23.02 - COLABORADORES SIN ALTA EFECTIVA',
];

const pedido_15_24 = [
    '',
    '15.24.01 - ABM DE USUARIOS BASE DE DATOS ON PREMISE',
];

const pedido_15_25 = [
    '',
    '15.25.01 - BLANQUEO DE USUARIO',
    '15.25.02 - DESBLOQUEO DE USUARIO',
    '15.25.03 - BLANQUEO Y DESBLOQUEO DE USUARIO',
];

const pedido_15_26 = [
    '',
    '15.26.01 - CREACIÓN DE CERTIFICADO SSL/AUTO-FIRMADO/CA INTERNA',
    '15.26.02 - CREACIÓN DE LLAVES SSH',
];
const pedido_16_1 = [
    '',
    '16.01.01 - YO PRESENTE',
    '16.01.02 - TU CONEXIÓN',
    '16.01.03 - CASAMIENTO / ANIVERSARIOS NARANJA X',
    '16.01.04 - SNACK XXL',
    '16.01.05 - REGALO GRADUACIÓN',
    '16.01.06 - REGALO NACIMIENTO',
    '16.01.07 - WORK FROM ANYWHERE',
    // "16.01.08 - CABIFY",
    '16.01.09 - GUARDERIA',
    '16.01.10 - ACOMPAÑAMIENTO TERAPIAS',
    '16.01.11 - GYMPASS',
];

const pedido_16_2 = [
    '',
    '16.02.01 - INCENTIVOS MENSUALES VENTAS',
    '16.02.02 - INCENTIVOS TRIMESTRALES RED COMERCIAL',
    '16.02.03 - CONSULTA DE CONCEPTOS LIQUIDADOS',
    '16.02.04 - ANTICIPOS SUPERIORES AL MÁXIMO',
    // "16.02.05 - SOLICITUD DE INCENTIVO POR VIAJES",
    '16.02.06 - DEVOLUCIÓN DE DIFERENCIA DE CAJA',
    '16.02.07 - LIQUIDACIÓN DE VACACIONES',
    '16.02.08 - FORMULARIO 1357',
    '16.02.09 - FORMULARIO 931',
    '16.02.10 - PAGOS ADICIONALES',
];

const pedido_16_3 = [
    '',
    '16.03.01 - CÁLCULO DE LIQUIDACIÓN FINAL',
    '16.03.02 - PEDIDO DE SANCIÓN',
    '16.03.03 - ALTA DE EXTERNOS',
    '16.03.04 - BAJA DE EXTERNOS',
    '16.03.05 - ALTA DE UNIDAD ORGANIZATIVA Y CENTRO DE COSTOS',
    '16.03.06 - MODIFICACIÓN DE UNIDAD ORGANIZATIVA Y CENTRO DE COSTOS',
    '16.03.07 - BAJA DE UNIDAD ORGANIZATIVA Y CENTRO DE COSTOS',
    // '16.03.08 - ART',
    '16.03.09 - TABLERO DE COLABORADORES',
    '16.03.10 - CAMBIO DE PUESTO NXER EXTERNO',
    '16.03.11 - ALTA EXTERNO IT',
    // '16.03.12 - ACTUALIZAR DATOS DE EXTERNOS',
];

const pedido_16_4 = [
    '',
    '16.04.01 - ENFERMEDAD MÁS DE 10 DÍAS',
    '16.04.02 - LICENCIA POR EMBARAZO DE RIESGO',
    '16.04.03 - MODIFICAR O CANCELAR AUSENCIAS CARGADAS',
    '16.04.04 - CONSULTA DE DÍAS DISPONIBLES',
    '16.04.05 - LICENCIA SIN GOCE SE SUELDO',
    '16.04.06 - ART',
];

const pedido_16_5 = [
    '',
    '16.05.01 - INFORMACIÓN PARA INVESTIGACIÓN',
    '16.05.02 - CERTIFICADOS DE TRABAJO',
    '16.05.03 - CAMBIO DE OBRA SOCIAL',
    '16.05.04 - SEGURO DE VIDA',
    '16.05.05 - CABIFY',
    '16.05.06 - ABM DATOS COLABORADORES',
    '16.05.07 - TELEGRAMA DE RENUNCIA',
    '16.05.08 - CARTA CERTIFICADA DE ANSES',
    '16.05.09 - AFILIACION SINDICAL',
];

const pedido_16_6 = ['', '16.06.01 - INCONVENIENTES CON PLATAFORMAS DE PEOPLE'];

const pedido_16_7 = [
    '',
    '16.07.01 - APADRINAMIENTO COMEDORES - CAMBIO DE TESORERO',
    '16.07.02 - APADRINAMIENTO COMEDORES',
];

const pedido_16_8 = [
    '',
    '16.08.01 - ACCESIBILIDAD / PERSONAS CON DISCAPACIDAD',
];
const pedido_16_9 = ['', '16.09.01 - INGRESO REFERIDO'];

const pedido_16_10 = [
    '',
    '16.10.01 - UDEMY',
    '16.10.02 - ESPACIO NX',
    // '16.10.03 - ACADEMIA DATA & ANALYTICS',
];

const pedido_17_1 = ['', '17.01.01 - CARGA DE CUIT GESTIONADO'];

const pedido_18_1 = [
    '',
    '18.01.01 - CLOUD INCIDENTE',
    '18.01.02 - CLOUD REQUERIMIENTO',
];

const pedido_18_2 = [
    '',
    '18.02.01 - ON PREMISE INCIDENTE',
    '18.02.02 - ON PREMISE REQUERIMIENTO',
    '18.02.03 - OC INFRAESTRUCTURA DATACENTERS',
];

const pedido_19_1 = ['', '19.01.01 - COMPENSAR FALTANTE CON SOBRANTE'];

const pedido_19_2 = [
    '',
    '19.02.01 - ALTA Y BAJA DE RECAUDACIONES PARALELAS',
    '19.02.02 - ALTA Y CAMBIO DE CATEGORIA',
];

const pedido_19_3 = [
    '',
    '19.03.01 - EMISIÓN DE REMITO DEFINITIVO SIN ENTREGA A PROSEGUR',
    '19.03.02 - PEDIDO DE CAMBIO',
    '19.03.03 - SOLICITUD DE VIDEO DE RECUENTO',
];

const pedido_19_4 = ['', '19.04.01 - NUEVO PEDIDO - COMPENSACIONES TASI-BRM'];

const pedido_19_5 = [
    '',
    '19.05.01 - NUEVO PEDIDO - AJUSTES INTERNOS GESTION PRODUCTOS',
];

const pedido_19_6 = [
    '',
    '19.06.01 - NUEVO PEDIDO - PARAMETROS DEL FONDO DE GASTOS',
];

const pedido_21_1 = ['', '21.01.01 - MODIFICACION ABM DE PRV'];

const pedido_21_2 = [
    '',
    '21.02.01 - ALTA FONDO FIJO',
    '21.02.02 - AUMENTO DE FONDO FIJO',
    '21.02.03 - BAJA FONDO FIJO',
];

const pedido_21_3 = ['', '21.03.01 - PAGO SERV. DE LUZ'];
const pedido_21_4 = ['', '21.04.01 - COBERTURA DE AUTORIZADOR'];
const pedido_21_5 = ['', '21.05.01 - DEVOLUCION DE RETENCIONES'];
const pedido_20_1 = [
    '',
    '20.01.01 - ENVÍO DE ACTAS (Relacionadas a Seguridad Laboral)',
    '20.01.02 - SOLICITUD DE SILLA POR INDICACIONES MÉDICAS',
];

const pedido_20_2 = [
    '',
    '20.02.01 - SOLICITUD POR REVISIÓN GENERAL',
    '20.02.02 - SOLICITUD POR FALTANTE DE CAJA',
    '20.02.03 - SOLICITUD LEGALES POR OFICIO',
    '20.02.04 - SOLICITUD POR FRAUDE',
];

const pedido_20_3 = ['', '20.03.01 - ABM USUARIOS DE SISTEMA DE ALARMA'];

const pedido_20_4 = [
    '',
    '20.04.01 - SOLICITUD DE SERVICIOS DE SEG. FÍSICA POR URGENCIAS',
    '20.04.02 - AUSENCIA DE SEGURIDAD FÍSICA',
    // 'AVISO DE TRABAJO'
    '20.04.03 - CONSULTA Y ASESORAMIENTO',
    // 'ALTA PROVEEDORES GCG',
    '20.04.04 - ABM CONTROL DE ACCESO',
    '20.04.05 - AVISO DE TRABAJO',
    '20.04.06 - ALTA PROVEEDORES',
];

const pedido_20_5 = [
    '',
    '20.05.01 - FACTURAS FÍSICAS DE SERVICIOS (LUZ)',
    '20.05.02 - FACTURAS FÍSICAS DE SERVICIOS (GAS)',
];

const pedido_22_1 = ['', '22.01.01 - ENCOMIENDA'];

// -----------------------------------------------------------------------
// ------Definimos las variables para cargar los datos en el select------
// -----------------------------------------------------------------------

const pedido_23_1 = [
    '',
    '23.01.01 - ALTA NUEVO ESTUDIO-AGENCIA DE COBRANZAS [570]',
    '23.01.02 - DEPÓSITOS EN CUENTA BANCARIA [567]',
    '23.01.03 - MODIFICACIÓN DE DATOS INTERNOS DEL ESTUDIO-AGENCIA DE COBRANZAS [571]',
    '23.01.04 - CONSULTA AUTORIZACIONES Y REINTEGROS DE GASTOS [515]',
    '23.01.05 - ORDENES DE PAGO ELECTRÓNICAS- RENDICIONES [577]',
    '23.01.06 - MODIFICACIÓN DE MARCAS [474]',
    '23.01.07 - HONORARIOS: LIQUIDACIONES Y FACTURACIÓN [461]',
    '23.01.08 - DATOS DEL ESTUDIO ASIGNADO [476]',
    
    // '23.01.01 - AJUSTES POR BONIFICACIONES DE REFINANCIACIONES [490]',
    // '23.01.02 - AJUSTE PAGO CON QUITA EN CUOTAS [566]',
    // '23.01.04 - AUTORIZAR Y HABILITAR QUITA EXTRAJUDICIAL [488]',
    // '23.01.05 - CARTAS [481]',
    // '23.01.08 - LINEAMIENTOS DE GESTIÓN [502]',
    // '23.01.09 - FUNCIONAMIENTO DE LA PÁGINA [496]',
    // '23.01.12 - PAGOS: PROBLEMAS DE IMPUTACIÓN [459]',
    '23.01.13 - PEDIDO DE GERENCIA DE LEGALES [493]',
    // '23.01.14 - PEDIDOS DE RZ [505]',
    // '23.01.15 - PAGO FÁCIL [568]',
    // '23.01.17 - RECIBOS PROVISORIOS [569]',
    // '23.01.18 - PROBLEMAS EN LA PÁGINA – DATOS ADICIONALES [508]',
    // '23.01.19 - RECUPERAR CTA. DE ESTUDIO JURÍDICO [482]',
    // '23.01.20 - REFINANCIAR CON TASA ESPECIAL [489]',
    // '23.01.21 - SOLICITUD DE DATOS DE CLIENTES EEJJ [503]',
    '23.01.22 - VENTA DE CARTERA [470]',
    // '23.01.23 - ABM DE PROMOCIÓN PARA COMISIÓN VARIABLE [572]',
    // '23.01.24 - REASIGNACIÓN DE CUENTA [501]',
    // '23.01.25 - CONSULTA ENTRANTE TELEFÓNICA RZ [574]',
    // '23.01.26 - CONSULTANTE ENTRANTE MAIL RZ [575]',
];

const pedido_23_5 = [
    '',
    '23.05.01 - AJUSTE A CERO EN TELESOFT Y-O BATCH [510]',
    '23.05.02 - AUDITORIAS Y EXTRACTOS BANCARIOS [462]',
    '23.05.03 - ARREGLOS DE SALDOS JUDICIALES EN EL SISTEMA [512]',
    '23.05.04 - CONCURSOS Y QUIEBRAS [511]',
    //        '23.05.05 - CONSULTA AUTORIZACIONES Y REINTEGROS DE GASTOS [515]',  //// 23.01
    '23.05.06 - CONSULTAS VARIAS JUDICIALES [562]',
    '23.05.07 - NOTIFICACIONES (EJECUCIÓN DE GASTOS DE COBRANZAS) [516]',
    '23.05.08 - DESMARCAR ETAPAS DE JUICIOS [514]',
    '23.05.09 - HABILITAR QUITA JUDICIAL [518]',
    '23.05.10 - LEGAJOS Y PAPELERÍA SUPLEMENTARIA [517]',
    '23.05.11 - MARCA DEMANDA ENTABLADA [513]',
    //      '23.05.12 - ORDENES DE PAGO ELECTRÓNICAS- RENDICIONES [577]', //// 23.01
];

const pedido_23_3 = [
    '',
    '23.03.01 - ABM SUCURSALES [533]',
    '23.03.02 - ABM USUARIOS ICS [532]',
    '23.03.03 - ALTA DE USUARIOS [509]',
    '23.03.04 -CONSULTA INFORME RECUPERO POR TRAMO DE MORA [522]',
    '23.03.05 - CONSULTA INFORMES RUI - LLAMADORES [523]',
    '23.03.06 - CONSULTA SOBRE PLANIFICACIÓN DE LLAMADOS [528]',
    '23.03.07 - ENVÍO DE PARCIALES Y FINALES [520]',
    '23.03.08 - MODIF. EN LA CAPACIDAD DE GESTIÓN DE LOCALES -ICS [535]',
    '23.03.09 - MODIFICACIÓN DE INFORME [526]',
    '23.03.10 - PARAMETRÍA ICS [534]',
    '23.03.11 - PEDIDO DE LISTADOS O INFORMACIÓN [531]',
    '23.03.12 - CONSULTAS INFORMES COGNOS [565]',
    '23.03.13 - PRESUPUESTO: CONSULTAS SOBRE IMPUTACIONES DE GASTOS CR [536]',
    '23.03.14 - RECLAMOS SOBRE INFORMES [530]',
    '23.03.15 - PEDIDO DE INFORMES NUEVOS [527]',
    '23.03.16 - SISTEMA ICS [519]',
    '23.03.17 - SOLICITUD DE DATOS DE CLIENTES LOCALES [504]',
    //      '23.03.18 - VERIFICACIÓN Y- O MODIFICACIÓN DE MARCAS [474]', //// 23.01
    '23.03.19 - RED DE EXPERTOS (MORA) [578]',
];
const pedido_23_4 = [
    '',
    '23.04.01 - VERIFICAR FUNCIONAMIENTO DE TABLERO DE EQUIPO [184]',
    '23.04.02 - ABM DE TAREAS [188]',
    '23.04.03 - CAMBIOS EN CONDICIONES DE COLABORADORES [185]',
    '23.04.04 - SOLICITUD DE ASESORAMIENTO [75]',
];

const pedido_24_1 = ['', '24.01.01 - MODIFICACION'];

const pedido_24_2 = [
    '',
    '24.02.01 - ALTA DE LOCALES NARANJA',
    '24.02.02 - BAJA DE LOCALES NARANJA',
    '24.02.03 - MODIFICACION DE LOCALES NARANJA',
];

const pedido_24_3 = ['', '24.03.01 - REQUERIMIENTOS ACCIONES COMERCIALES ALTA'];

const pedido_24_4 = [
    '',
    '24.04.01 - ALTA TASI',
    '24.04.02 - BAJA TASI',
    '24.04.03 - MODIFICAION TASI',
];

const pedido_24_5 = ['', '24.05.01 - ABOGADOS ALTA'];

const pedido_24_6 = ['', '24.06.01 - BANCOS MODIFICACION'];

const pedido_24_7 = [
    '',
    '24.07.01 - COMPLIANCE ALTAS',
    '24.07.02 - COMPLIANCE BAJAS',
];

const pedido_24_8 = ['', '24.08.01 - FRAUDE BAJAS'];

const pedido_24_9 = ['', '24.09.01 - MONTO MAXIMO MODIFICACION'];

const pedido_24_10 = ['', '24.10.01 - ALTA DE BONIFICACIONES TITULARES'];

const pedido_24_11 = [
    '',
    '24.11.01 - ALTA DE CA',
    '24.11.02 - ALTA DE PLAN - CA',
    '24.11.03 - ALTA DE SUCURSAL - CA',
    '24.11.04 - BAJA DE CA',
    '24.11.05 - BAJA DE PLAN - CA',
    '24.11.06 - MODIFICACIÓN DE PLAN - CA',
    '24.11.07 - MODIFICACIÓN DE NOMBRE DE FANTASÍA, TELÉFONO, EMAIL, Y/O DOMICILIO - CA',
    '24.11.08 - MODIFICACIÓN DE BANCO - CA',
    '24.11.09 - MODIFICACIÓN DE CONDICIÓN IMPOSITIVA - CA',
];

const pedido_24_12 = [
    '',
    '24.12.01 - ALTA DE LARGE',
    '24.12.02 - ALTA DE PLAN - LARGE',
    '24.12.03 - ALTA DE SUCURSAL - LARGE',
    '24.12.04 - BAJA DE LARGE',
    '24.12.05 - BAJA DE PLAN - LARGE',
    '24.12.06 - MODIFICACIÓN DE NOMBRE DE FANTASÍA, TELÉFONO, EMAIL Y/O DOMICILIO - LARGE',
    '24.12.07 - MODIFICACIÓN DE BANCO - LARGE',
    '24.12.08 - MODIFICACIÓN DE CONDICIÓN IMPOSITIVA - LARGE',
    '24.12.09 - CARGA DE BONIFICACIONES - LARGE',
    '24.12.10 - CARGA DE VIGENCIAS - LARGE',
];

const pedido_25_1 = [
    '',
    '25.01.01 - REQUERIMIENTO (AUTOMATIONS)',
    '25.01.02 - INCIDENTE (AUTOMATIONS)',
    '25.01.03 - CONSULTA (AUTOMATIONS)',
];

const pedido_25_2 = [
    '',
    '25.02.01 - REQUERIMIENTO (FINANCES & OPERATIONS)',
    '25.02.02 - INCIDENTE (FINANCES & OPERATIONS)',
    '25.02.03 - CONSULTA (FINANCES & OPERATIONS)',
];

const pedido_25_3 = [
    '',
    '25.03.01 - REQUERIMIENTO (CONCILIATIONS)',
    '25.03.02 - INCIDENTE (CONCILIATIONS)',
    '25.03.03 - CONSULTA (CONCILIATIONS)',
];

const pedido_25_4 = [
    '',
    '25.04.01 - REQUERIMIENTO (TRANSACTIONAL DATA)',
    '25.04.02 - INCIDENTE (TRANSACTIONAL DATA)',
    '25.04.03 - CONSULTA (TRANSACTIONAL DATA)',
];

const pedido_25_5 = [
    '',
    '25.05.01 - REQUERIMIENTO (COMPLIANCE SOLUTIONS)',
    '25.05.02 - INCIDENTE (COMPLIANCE SOLUTIONS)',
    '25.05.03 - CONSULTA (COMPLIANCE SOLUTIONS)',
];

const pedido_26_1 = [
    '',
    '26.01.01 - ONBOARDING MANUAL',
    '26.01.02 - ONBOARDING ISA',
    '26.01.03 - prueba'
];

tipologia.push(pedido_1_1);
tipologia.push(pedido_1_2);
tipologia.push(pedido_1_3);
tipologia.push(pedido_1_4);
tipologia.push(pedido_1_5);
tipologia.push(pedido_1_6);
tipologia.push(pedido_10_1);
tipologia.push(pedido_12_1);
tipologia.push(pedido_13_1);
tipologia.push(pedido_13_2);
tipologia.push(pedido_14_1);
tipologia.push(pedido_14_3);
tipologia.push(pedido_14_4);
tipologia.push(pedido_14_5);
tipologia.push(pedido_14_6);
tipologia.push(pedido_14_7);
tipologia.push(pedido_14_8);
tipologia.push(pedido_14_9);
tipologia.push(pedido_15_1);
tipologia.push(pedido_15_10);
tipologia.push(pedido_15_11);
tipologia.push(pedido_15_12);
tipologia.push(pedido_15_13);
tipologia.push(pedido_15_14);
tipologia.push(pedido_15_15);
tipologia.push(pedido_15_16);
tipologia.push(pedido_15_17);
tipologia.push(pedido_15_18);
tipologia.push(pedido_15_19);
tipologia.push(pedido_15_2);
tipologia.push(pedido_15_20);
tipologia.push(pedido_15_21);
tipologia.push(pedido_15_22);
tipologia.push(pedido_15_23);
tipologia.push(pedido_15_24);
tipologia.push(pedido_15_25);
tipologia.push(pedido_15_26);
tipologia.push(pedido_15_3);
tipologia.push(pedido_15_4);
tipologia.push(pedido_15_5);
tipologia.push(pedido_15_6);
tipologia.push(pedido_15_7);
tipologia.push(pedido_15_8);
tipologia.push(pedido_15_9);
tipologia.push(pedido_16_1);
tipologia.push(pedido_16_10);
tipologia.push(pedido_16_2);
tipologia.push(pedido_16_3);
tipologia.push(pedido_16_4);
tipologia.push(pedido_16_5);
tipologia.push(pedido_16_6);
tipologia.push(pedido_16_7);
tipologia.push(pedido_16_8);
tipologia.push(pedido_16_9);
tipologia.push(pedido_17_1);
tipologia.push(pedido_18_1);
tipologia.push(pedido_18_2);
tipologia.push(pedido_19_1);
tipologia.push(pedido_19_2);
tipologia.push(pedido_19_3);
tipologia.push(pedido_19_4);
tipologia.push(pedido_19_5);
tipologia.push(pedido_19_6);
tipologia.push(pedido_2_1);
tipologia.push(pedido_2_2);
tipologia.push(pedido_2_3);
tipologia.push(pedido_20_1);
tipologia.push(pedido_20_2);
tipologia.push(pedido_20_3);
tipologia.push(pedido_20_4);
tipologia.push(pedido_20_5);
tipologia.push(pedido_21_1);
tipologia.push(pedido_21_2);
tipologia.push(pedido_21_3);
tipologia.push(pedido_21_4);
tipologia.push(pedido_21_5);
tipologia.push(pedido_22_1);
tipologia.push(pedido_23_1);
tipologia.push(pedido_23_3);
tipologia.push(pedido_23_4);
tipologia.push(pedido_23_5);
tipologia.push(pedido_24_1);
tipologia.push(pedido_24_10);
tipologia.push(pedido_24_11);
tipologia.push(pedido_24_12);
tipologia.push(pedido_24_2);
tipologia.push(pedido_24_3);
tipologia.push(pedido_24_4);
tipologia.push(pedido_24_5);
tipologia.push(pedido_24_6);
tipologia.push(pedido_24_7);
tipologia.push(pedido_24_8);
tipologia.push(pedido_24_9);
tipologia.push(pedido_25_1);
tipologia.push(pedido_25_2);
tipologia.push(pedido_25_3);
tipologia.push(pedido_25_4);
tipologia.push(pedido_25_5);
tipologia.push(pedido_26_1);
tipologia.push(pedido_3_1);
tipologia.push(pedido_3_2);
tipologia.push(pedido_4_1);
tipologia.push(pedido_4_10);
tipologia.push(pedido_4_11);
tipologia.push(pedido_4_12);
tipologia.push(pedido_4_13);
tipologia.push(pedido_4_2);
tipologia.push(pedido_4_4);
tipologia.push(pedido_4_5);
tipologia.push(pedido_4_6);
tipologia.push(pedido_4_7);
tipologia.push(pedido_4_9);
tipologia.push(pedido_5_1);
tipologia.push(pedido_5_2);
tipologia.push(pedido_6_1);
tipologia.push(pedido_6_2);
tipologia.push(pedido_6_3);
tipologia.push(pedido_7_1);
tipologia.push(pedido_7_2);
tipologia.push(pedido_7_3);
tipologia.push(pedido_8_1);
tipologia.push(pedido_8_2);
tipologia.push(pedido_9_1);
tipologia.push(pedido_9_2);
tipologia.push(pedido_9_4);

function quitarAcentos(cadena) {
  return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function buscarCoincidencias() {
  let input = quitarAcentos(document.getElementById("buscar").value.trim().toLowerCase()); // Obtener el valor del input y quitar acentos
  let resultadosDiv = document.querySelector(".resultados");

  resultadosDiv.innerHTML = "";

  if (input === "") {
    return;
  }
  tipologia.forEach(function (pedido) {
    pedido.forEach(function (elemento) {
      if (quitarAcentos(elemento.toLowerCase()).includes(input)) {
        let item = document.createElement("li");
        item.textContent = elemento;
        resultadosDiv.appendChild(item);
      }
    });
  });
}
document.getElementById("buscar").addEventListener("input", buscarCoincidencias);

const $grupo = document.getElementById('grupo');
const $tipo = document.getElementById('tipo');
const $pedido = document.getElementById('pedido');

// La función recibe 2 parámetros el primero es el arreglo que hemos creado y el segundo el lugar (select) donde se va a mostrar
function mostrarOpciones(arreglo, lugar) {
    let elementos =
        "<option value='' selected disabled>Seleccione una opción...</option>";

    for (let i = 1; i < arreglo.length; i++) {
        elementos +=
            '<option value="' + arreglo[i] + '">' + arreglo[i] + '</option>';
    }
    // Mostramos los elementos en el lugar seleccionado
    lugar.innerHTML = elementos;
}

// Llamamos la función para cargar el grupo
mostrarOpciones(grupos, $grupo);

// Cuando el grupo cambia ejecuta la función para el $tipo dependiendo el grupo elegido
$grupo.addEventListener('change', function () {
    const valor = $grupo.value.substring(0, 2);

    switch (valor) {
        case '01':
            mostrarOpciones(tipo_1, $tipo);
            break;
        case '02':
            mostrarOpciones(tipo_2, $tipo);
            break;
        case '03':
            mostrarOpciones(tipo_3, $tipo);
            break;
        case '04':
            mostrarOpciones(tipo_4, $tipo);
            break;
        case '05':
            mostrarOpciones(tipo_5, $tipo);
            break;
        case '06':
            mostrarOpciones(tipo_6, $tipo);
            break;
        case '07':
            mostrarOpciones(tipo_7, $tipo);
            break;
        case '08':
            mostrarOpciones(tipo_8, $tipo);
            break;
        case '09':
            mostrarOpciones(tipo_9, $tipo);
            break;
        case '10':
            mostrarOpciones(tipo_10, $tipo);
            break;
        // case "11":
        //   mostrarOpciones(tipo_11, $tipo);
        //   break;
        case '12':
            mostrarOpciones(tipo_12, $tipo);
            break;
        case '13':
            mostrarOpciones(tipo_13, $tipo);
            break;
        case '14':
            mostrarOpciones(tipo_14, $tipo);
            break;
        case '15':
            mostrarOpciones(tipo_15, $tipo);
            break;
        case '16':
            mostrarOpciones(tipo_16, $tipo);
            break;
        case '17':
            mostrarOpciones(tipo_17, $tipo);
            break;
        case '18':
            mostrarOpciones(tipo_18, $tipo);
            break;
        case '19':
            mostrarOpciones(tipo_19, $tipo);
            break;
        case '20':
            mostrarOpciones(tipo_20, $tipo);
            break;
        case '21':
            mostrarOpciones(tipo_21, $tipo);
            break;
        case '22':
            mostrarOpciones(tipo_22, $tipo);
            break;
        case '23':
            mostrarOpciones(tipo_23, $tipo);
            break;
        case '24':
            mostrarOpciones(tipo_24, $tipo);
            break;
        case '25':
            mostrarOpciones(tipo_25, $tipo);
            break;
        case '26':
            mostrarOpciones(tipo_26, $tipo);
            break;
    }
    // Limpiamos el select de pedido hasta que se elija el tipo
    $pedido.innerHTML = '';
});

$tipo.addEventListener('change', function () {
    const valor = $tipo.value.substring(0, 5);

    switch (valor) {
        case '01.01':
            mostrarOpciones(pedido_1_1, $pedido);
            break;
        case '01.02':
            mostrarOpciones(pedido_1_2, $pedido);
            break;
        case '01.03':
            mostrarOpciones(pedido_1_3, $pedido);
            break;
        case '01.04':
            mostrarOpciones(pedido_1_4, $pedido);
            break;
        case '01.05':
            mostrarOpciones(pedido_1_5, $pedido);
            break;
        case '01.06':
            mostrarOpciones(pedido_1_6, $pedido);
            break;
        case '02.01':
            mostrarOpciones(pedido_2_1, $pedido);
            break;
        case '02.02':
            mostrarOpciones(pedido_2_2, $pedido);
            break;
        case '02.03':
            mostrarOpciones(pedido_2_3, $pedido);
            break;
        case '03.01':
            mostrarOpciones(pedido_3_1, $pedido);
            break;
        case '03.02':
            mostrarOpciones(pedido_3_2, $pedido);
            break;
        case '04.01':
            mostrarOpciones(pedido_4_1, $pedido);
            break;
        case '04.02':
            mostrarOpciones(pedido_4_2, $pedido);
            break;
        case '04.04':
            mostrarOpciones(pedido_4_4, $pedido);
            break;
        case '04.05':
            mostrarOpciones(pedido_4_5, $pedido);
            break;
        case '04.06':
            mostrarOpciones(pedido_4_6, $pedido);
            break;
        case '04.07':
            mostrarOpciones(pedido_4_7, $pedido);
            break;
        // case "04.08":
        //   mostrarOpciones(pedido_4_8, $pedido);
        //   break;
        case '04.09':
            mostrarOpciones(pedido_4_9, $pedido);
            break;
        case '04.10':
            mostrarOpciones(pedido_4_10, $pedido);
            break;
        case '04.11':
            mostrarOpciones(pedido_4_11, $pedido);
            break;
        case '04.12':
            mostrarOpciones(pedido_4_12, $pedido);
            break;
        case '04.13':
            mostrarOpciones(pedido_4_13, $pedido);
            break;
        case '05.01':
            mostrarOpciones(pedido_5_1, $pedido);
            break;
        case '05.02':
            mostrarOpciones(pedido_5_2, $pedido);
            break;
        case '06.01':
            mostrarOpciones(pedido_6_1, $pedido);
            break;
        case '06.02':
            mostrarOpciones(pedido_6_2, $pedido);
            break;
        case '06.03':
            mostrarOpciones(pedido_6_3, $pedido);
            break;
        case '07.01':
            mostrarOpciones(pedido_7_1, $pedido);
            break;
        case '07.02':
            mostrarOpciones(pedido_7_2, $pedido);
            break;
        case '07.03':
            mostrarOpciones(pedido_7_3, $pedido);
            break;
        case '08.01':
            mostrarOpciones(pedido_8_1, $pedido);
            break;
        case '08.02':
            mostrarOpciones(pedido_8_2, $pedido);
            break;
        case '09.01':
            mostrarOpciones(pedido_9_1, $pedido);
            break;
        case '09.02':
            mostrarOpciones(pedido_9_2, $pedido);
            break;
        case '09.03':
            mostrarOpciones(pedido_9_3, $pedido);
            break;
        case '09.04':
            mostrarOpciones(pedido_9_4, $pedido);
            break;
        // case '09.05':
        //     mostrarOpciones(pedido_9_5, $pedido);
        //     break;
        case '10.01':
            mostrarOpciones(pedido_10_1, $pedido);
            break;
        // case "11.01":
        //   mostrarOpciones(pedido_11_1, $pedido);
        //   break;
        case '12.01':
            mostrarOpciones(pedido_12_1, $pedido);
            break;
        case '13.01':
            mostrarOpciones(pedido_13_1, $pedido);
            break;
        case '13.02':
            mostrarOpciones(pedido_13_2, $pedido);
            break;
        case '14.01':
            mostrarOpciones(pedido_14_1, $pedido);
            break;
        // case "14.02":
        //   mostrarOpciones(pedido_14_2, $pedido);
        //   break;
        case '14.03':
            mostrarOpciones(pedido_14_3, $pedido);
            break;
        case '14.04':
            mostrarOpciones(pedido_14_4, $pedido);
            break;
        case '14.05':
            mostrarOpciones(pedido_14_5, $pedido);
            break;
        case '14.06':
            mostrarOpciones(pedido_14_6, $pedido);
            break;
        case '14.07':
            mostrarOpciones(pedido_14_7, $pedido);
            break;
        case '14.08':
            mostrarOpciones(pedido_14_8, $pedido);
            break;
        case '14.09':
            mostrarOpciones(pedido_14_9, $pedido);
            break;
        case '15.01':
            mostrarOpciones(pedido_15_1, $pedido);
            break;
        case '15.02':
            mostrarOpciones(pedido_15_2, $pedido);
            break;
        case '15.03':
            mostrarOpciones(pedido_15_3, $pedido);
            break;
        case '15.04':
            mostrarOpciones(pedido_15_4, $pedido);
            break;
        case '15.05':
            mostrarOpciones(pedido_15_5, $pedido);
            break;
        case '15.06':
            mostrarOpciones(pedido_15_6, $pedido);
            break;
        case '15.07':
            mostrarOpciones(pedido_15_7, $pedido);
            break;
        case '15.08':
            mostrarOpciones(pedido_15_8, $pedido);
            break;
        case '15.09':
            mostrarOpciones(pedido_15_9, $pedido);
            break;
        case '15.10':
            mostrarOpciones(pedido_15_10, $pedido);
            break;
        case '15.11':
            mostrarOpciones(pedido_15_11, $pedido);
            break;
        case '15.12':
            mostrarOpciones(pedido_15_12, $pedido);
            break;
        case '15.13':
            mostrarOpciones(pedido_15_13, $pedido);
            break;
        case '15.14':
            mostrarOpciones(pedido_15_14, $pedido);
            break;
        case '15.15':
            mostrarOpciones(pedido_15_15, $pedido);
            break;
        case '15.16':
            mostrarOpciones(pedido_15_16, $pedido);
            break;
        case '15.17':
            mostrarOpciones(pedido_15_17, $pedido);
            break;
        case '15.18':
            mostrarOpciones(pedido_15_18, $pedido);
            break;
        case '15.19':
            mostrarOpciones(pedido_15_19, $pedido);
            break;
        case '15.20':
            mostrarOpciones(pedido_15_20, $pedido);
            break;
        case '15.21':
            mostrarOpciones(pedido_15_21, $pedido);
            break;
        case '15.22':
            mostrarOpciones(pedido_15_22, $pedido);
            break;
        case '15.23':
            mostrarOpciones(pedido_15_23, $pedido);
            break;
        case '15.24':
            mostrarOpciones(pedido_15_24, $pedido);
            break;
        case '15.25':
            mostrarOpciones(pedido_15_25, $pedido);
            break;
        case '15.26':
            mostrarOpciones(pedido_15_26, $pedido);
            break;
        case '16.01':
            mostrarOpciones(pedido_16_1, $pedido);
            break;
        case '16.02':
            mostrarOpciones(pedido_16_2, $pedido);
            break;
        case '16.03':
            mostrarOpciones(pedido_16_3, $pedido);
            break;
        case '16.04':
            mostrarOpciones(pedido_16_4, $pedido);
            break;
        case '16.05':
            mostrarOpciones(pedido_16_5, $pedido);
            break;
        case '16.06':
            mostrarOpciones(pedido_16_6, $pedido);
            break;
        case '16.07':
            mostrarOpciones(pedido_16_7, $pedido);
            break;
        case '16.08':
            mostrarOpciones(pedido_16_8, $pedido);
            break;
        case '16.09':
            mostrarOpciones(pedido_16_9, $pedido);
            break;
        case '16.10':
            mostrarOpciones(pedido_16_10, $pedido);
            break;
        case '17.01':
            mostrarOpciones(pedido_17_1, $pedido);
            break;
        case '18.01':
            mostrarOpciones(pedido_18_1, $pedido);
            break;
        case '18.02':
            mostrarOpciones(pedido_18_2, $pedido);
            break;
        case '19.01':
            mostrarOpciones(pedido_19_1, $pedido);
            break;
        case '19.02':
            mostrarOpciones(pedido_19_2, $pedido);
            break;
        case '19.03':
            mostrarOpciones(pedido_19_3, $pedido);
            break;
        case '19.04':
            mostrarOpciones(pedido_19_4, $pedido);
            break;
        case '19.05':
            mostrarOpciones(pedido_19_5, $pedido);
            break;
        case '19.06':
            mostrarOpciones(pedido_19_6, $pedido);
            break;
        case '20.01':
            mostrarOpciones(pedido_20_1, $pedido);
            break;
        case '20.02':
            mostrarOpciones(pedido_20_2, $pedido);
            break;
        case '20.03':
            mostrarOpciones(pedido_20_3, $pedido);
            break;
        case '20.04':
            mostrarOpciones(pedido_20_4, $pedido);
            break;
        case '20.05':
            mostrarOpciones(pedido_20_5, $pedido);
            break;
        case '21.01':
            mostrarOpciones(pedido_21_1, $pedido);
            break;
        case '21.02':
            mostrarOpciones(pedido_21_2, $pedido);
            break;
        case '21.03':
            mostrarOpciones(pedido_21_3, $pedido);
            break;
        case '21.04':
            mostrarOpciones(pedido_21_4, $pedido);
            break;
        case '21.05':
            mostrarOpciones(pedido_21_5, $pedido);
            break;
        case '22.01':
            mostrarOpciones(pedido_22_1, $pedido);
            break;
        case '23.01':
            mostrarOpciones(pedido_23_1, $pedido);
            break;       
        case '23.03':
            mostrarOpciones(pedido_23_3, $pedido);
            break;
        case '23.04':
            mostrarOpciones(pedido_23_4, $pedido);
            break;
        case '23.05':
            mostrarOpciones(pedido_23_5, $pedido);
            break;
        case '24.01':
            mostrarOpciones(pedido_24_1, $pedido);
            break;
        case '24.02':
            mostrarOpciones(pedido_24_2, $pedido);
            break;
        case '24.03':
            mostrarOpciones(pedido_24_3, $pedido);
            break;
        case '24.04':
            mostrarOpciones(pedido_24_4, $pedido);
            break;
        case '24.05':
            mostrarOpciones(pedido_24_5, $pedido);
            break;
        case '24.06':
            mostrarOpciones(pedido_24_6, $pedido);
            break;
        case '24.07':
            mostrarOpciones(pedido_24_7, $pedido);
            break;
        case '24.08':
            mostrarOpciones(pedido_24_8, $pedido);
            break;
        case '24.09':
            mostrarOpciones(pedido_24_9, $pedido);
            break;
        case '24.10':
            mostrarOpciones(pedido_24_10, $pedido);
            break;
        case '24.11':
            mostrarOpciones(pedido_24_11, $pedido);
            break;
        case '24.12':
            mostrarOpciones(pedido_24_12, $pedido);
            break;
        case '25.01':
            mostrarOpciones(pedido_25_1, $pedido);
            break;
        case '25.02':
            mostrarOpciones(pedido_25_2, $pedido);
            break;
        case '25.03':
            mostrarOpciones(pedido_25_3, $pedido);
            break;
        case '25.04':
            mostrarOpciones(pedido_25_4, $pedido);
            break;
        case '25.05':
            mostrarOpciones(pedido_25_5, $pedido);
            break;
        case '26.01':
            mostrarOpciones(pedido_26_1, $pedido);
            break;
    }
});