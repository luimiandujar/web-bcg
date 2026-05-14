# Decisiones de Arquitectura — Soluciones Inmobiliarias RD

## Estado del Proyecto

**Fecha inicio:** 2026-05-14  
**Fase actual:** 1 — Infraestructura digital base

---

## Decisión 1 — Nombre de marca comercial

**Decisión:** Usar "Soluciones Inmobiliarias RD" como marca visible, no "BCG Loan Solutions"  
**Razón:** La palabra "Loan" activa filtros automáticos de Meta Ads. El reencuadre hacia bienes raíces es estratégico.  
**Consecuencia:** Footer del sitio lleva "BCG Loan Solutions © 2026" para coherencia con Business Manager.

---

## Decisión 2 — Stack del sitio web

**Decisión:** HTML/CSS/JS puro, sin frameworks  
**Razón:** Sitio pequeño de presentación. Máxima velocidad de carga, sin dependencias, fácil de hospedar en cualquier lugar.  
**Hosting recomendado:** Netlify (gratis, dominio propio, SSL automático) o Hostinger (~$3/mes .do domain).

---

## Decisión 3 — Identidad visual fase inicial

**Decisión:** Blanco y negro solamente en fase 1  
**Razón:** Permite avanzar en la presencia digital sin bloquear por decisiones de color. Se puede evolucionar a una paleta con color en una sesión posterior.

---

## Decisión 4 — CRM y WhatsApp

**Decisión:** Kommo + WhatsApp Business API (Meta Cloud API directa o BSP)  
**Razón:** Kommo tiene integración nativa con WhatsApp API. Permite bot de calificación automática antes de que el corredor tome la conversación.  
**Flujo:** Anuncio → Click to WhatsApp → Kommo → Bot califica → Corredor cierra

---

## Roadmap

### Fase 1 — Infraestructura base (actual)
- [x] Estructura del proyecto
- [x] Identidad visual B&W
- [x] Sitio web HTML/CSS/JS
- [ ] Dominio y hosting
- [ ] Correo corporativo

### Fase 2 — Meta Business Setup
- [ ] Meta Business Manager verificado
- [ ] Página de Facebook con categoría correcta
- [ ] Perfil de Instagram conectado
- [ ] WhatsApp Business API registrado

### Fase 3 — CRM y automatización
- [ ] Kommo configurado
- [ ] Pipeline: Nuevo lead → Calificando → Visita propiedad → Enviado a financiera → Firmado
- [ ] Bot de calificación (¿tiene propiedad? ¿ubicación? ¿monto?)

### Fase 4 — Campañas pagadas
- [ ] 10+ posts orgánicos publicados
- [ ] Primera campaña Meta Ads (Categoría Especial: Crédito)
- [ ] Segmentación: propietarios, 35-60 años, intereses en bienes raíces/inversión
