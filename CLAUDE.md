# BCG Loan Solutions — Presencia Digital

## Contexto del Proyecto

**Cliente:** BCG Loan Solutions  
**Marca comercial:** Soluciones Inmobiliarias RD  
**Responsable:** Corredor de préstamos actuando en representación de una financiera  
**Gestor de cuenta:** Luis M.

## Descripción del Negocio

Corredor de préstamos con garantía hipotecaria. No presta dinero directamente — su función es:
1. Captar el cliente con perfil adecuado
2. Depurar el lead (visita la propiedad a poner en garantía)
3. Pasar el lead calificado a la financiera para firma

**Perfil del cliente objetivo:** Personas que el banco tradicional rechaza pero tienen una propiedad inmobiliaria como garantía.

## Stack Tecnológico

- **Sitio web:** HTML/CSS/JS puro (sin frameworks externos)
- **CRM:** Kommo (integrado con WhatsApp Business API)
- **Anuncios:** Meta Ads — Categoría Especial: Crédito
- **WhatsApp:** Business API conectado a Kommo

## Identidad de Marca

- **Nombre comercial visible:** Soluciones Inmobiliarias RD
- **Nombre legal (Business Manager):** BCG Loan Solutions
- **Paleta:** Blanco y negro (fase inicial)
- **Posicionamiento:** Asesor de financiamiento con garantía inmobiliaria (NO "préstamos")

## Estructura del Proyecto

```
Euclides-BCG/
├── CLAUDE.md              ← Este archivo
├── READING.md             ← Guía rápida para nuevas sesiones
├── decisions/
│   └── architecture.md   ← Decisiones técnicas documentadas
├── .claude/
│   ├── settings.json
│   └── skills/
│       ├── web-dev/SKILL.md
│       └── brand-identity/SKILL.md
├── web/                   ← Sitio web completo
│   ├── index.html
│   ├── css/styles.css
│   ├── js/main.js
│   └── assets/
└── brand/                 ← Identidad visual
    ├── identity.md
    └── assets/
```

## Notas Críticas Meta Ads

- Siempre declarar **Categoría Especial → Crédito** al crear campañas
- Nunca usar frases tipo "el banco te rechazó" — activa filtros automáticos
- CTA preferido: WhatsApp (no formularios con datos financieros)
- La palabra "Loan" no debe aparecer en nombre visible de anuncios

## Próximos Pasos

- [ ] Dominio: `solucionesinmobiliariasrd.com` o `.do`
- [ ] Correo corporativo: `@solucionesinmobiliariasrd.com`
- [ ] Meta Business Manager verificado (con documentos de BCG Loan Solutions)
- [ ] WhatsApp Business API registrado
- [ ] Kommo configurado con pipeline y bot de calificación
- [ ] Campaña Meta Ads (después de 10+ posts orgánicos en redes)
