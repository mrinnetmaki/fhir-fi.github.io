"use strict";(self.webpackChunkfhir_demo_2024=self.webpackChunkfhir_demo_2024||[]).push([[72],{2186:function(e,l,t){t.d(l,{Z:function(){return m}});t(8320);var n=t(7294),I=t(4160),c=t(6226),g=t(3516),a=t(5867),i=t(6774);const C=(0,I.dq)("/");function m(e){let{children:l,location:t}=e;const{search:m,pathname:r}=t,{selectedFeatures:u={}}=n.useContext(a.Ym),o=Object.keys(u).sort(),A=Object.keys(g.D).filter((e=>{var l;return!o.length||(null===(l=g.D[e].features)||void 0===l?void 0:l.some((e=>o.some((l=>l===e)))))})),M=A.indexOf(r.replace(C,"").replaceAll("/","")),s=A.length>1?n.createElement("nav",{className:"prevNext"},n.createElement("div",null,M>0?n.createElement(I.rU,{to:"/"+A[M-1]+m},"Previous ",n.createElement("img",{src:i.Z,alt:""})):n.createElement(I.rU,{to:"/"+A[A.length-1]+m},"Last ",n.createElement("img",{src:i.Z,alt:""}))),n.createElement("div",null,M<A.length-1?n.createElement(I.rU,{to:"/"+A[M+1]+m},"Next ",n.createElement("img",{src:i.Z,alt:""})):n.createElement(I.rU,{to:"/"+A[0]+m},"First",n.createElement("img",{src:i.Z,alt:""})))):null;return n.createElement(c.Z,null,n.createElement("header",null,o.length?n.createElement(n.Fragment,null,n.createElement("hr",null),n.createElement("h3",null,"Showing demos with feature"+(o.length>1?"s":"")+":"),n.createElement(a.ZP,{list:o}),n.createElement("hr",null)):null,s),n.createElement("main",{className:"demo"},l),s,n.createElement("img",{className:"decoration",src:i.Z,alt:""}))}},9021:function(e,l,t){t.r(l),t.d(l,{Head:function(){return i},default:function(){return C}});var n=t(7294),I=t(2186),c=t(5867),g=t(3516),a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMzAyLjk0NCIKICAgaGVpZ2h0PSIxNDEuOTk4OTkiCiAgIHZpZXdCb3g9IjAgMCA4MC4xNTM5MjkgMzcuNTcwNTY3IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmczNDMwIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjAgcjE1Mjk5IgogICBzb2RpcG9kaTpkb2NuYW1lPSJjZ2kuc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMzQyNCIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iMi45ODA2MjEiCiAgICAgaW5rc2NhcGU6Y3g9IjE1MC40NzIiCiAgICAgaW5rc2NhcGU6Y3k9IjY5Ljk5OTQ5OSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIKICAgICB1bml0cz0icHgiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMjgwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc0NCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTQiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii00IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMzQyNyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4OS43ODI4NiwtMjg0Ljc1MzY4KSI+CiAgICA8ZwogICAgICAgaWQ9ImczNDU4IgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMywyNzMuMjYwOTUsMjY4LjAzMTc1KSI+CiAgICAgIDxnCiAgICAgICAgIGlkPSJMYXllcl8xIj4KCTxnCiAgIGlkPSJnMzQzOCI+CgkJPHBhdGgKICAgaWQ9InBhdGgzNDMyIgogICBkPSJtIDEzOC4yNDUsOTEuMjAxIGMgLTI3LjM5OSwwIC00NC4xOTksMjEuMzk5IC00NC4xOTksNDIuOTk5IDAsMjYgMjEuMiw0Mi45OTkgNDQuMzk5LDQyLjk5OSAxNS4zOTksMCAzMCwtNi43OTkgNDIuMzk5LC0xNy43OTkgdiAzMi4yIGMgLTEzLDcuOCAtMzAuOCwxMi42IC00NC42LDEyLjYgLTM5LjU5OSwwIC03Mi43OTksLTMyLjE5OSAtNzIuNzk5LC02OS45OTkgMCwtMzkuOTk5IDMzLjM5OSwtNjkuOTk5IDcyLjk5OSwtNjkuOTk5IDE1LjIsMCAzMyw0LjYgNDQuNTk5LDEwLjQgdiAzMS41OTkgYyAtMTQuNTk5LC05LjYgLTI5LjM5OCwtMTUgLTQyLjc5OCwtMTUgeiIKICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgc3R5bGU9ImZpbGw6I2UxMTkzNyIgLz4KCgkJPHBhdGgKICAgaWQ9InBhdGgzNDM0IgogICBkPSJtIDI2NS4wMjUsMjA0LjE5OSBjIC0zOS43OTksMCAtNzMuMzk4LC0zMSAtNzMuMzk4LC02OS45OTkgMCwtMzkuMzk5IDMzLjQsLTY5Ljk5OSA3NS4xOTksLTY5Ljk5OSAxNS4xOTksMCAzNCw0IDQ1LjYsOS40IFYgMTA1IGMgLTEzLjE5OSwtNy42IC0zMC4xOTksLTEzLjggLTQ1LC0xMy44IC0yNy4zOTgsMCAtNDUuMTk5LDIxLjM5OSAtNDUuMTk5LDQyLjk5OSAwLDI1LjM5OSAyMSw0My44IDQ1LjYsNDMuOCA1LjE5OSwwIDEwLjE5OSwtMC40IDE2LjYsLTIuODAxIFYgMTUwIGggLTIyLjM5OCB2IC0yNi42IGggNTEuMTk5IHYgNzAuNzk5IGMgLTE0LjYwMyw2LjYwMSAtMzEuMDAxLDEwIC00OC4yMDMsMTAgeiIKICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgc3R5bGU9ImZpbGw6I2UxMTkzNyIgLz4KCgkJPHBhdGgKICAgaWQ9InBhdGgzNDM2IgogICBkPSJNIDMzNS41OSwyMDEuMzk5IFYgNjcuMDAxIGggMjguNzk5IHYgMTM0LjM5OCB6IgogICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICBzdHlsZT0iZmlsbDojZTExOTM3IiAvPgoKCTwvZz4KCjwvZz4KICAgICAgPGcKICAgICAgICAgaWQ9IlByb3RlY3Rpb24iPgo8L2c+CiAgICAgIDxnCiAgICAgICAgIGlkPSJHdWlkZXMiPgo8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K";const i=()=>n.createElement("title",null,"FHIR Demo 2023: CGI");function C(e){let{location:l}=e;const t=g.D.cgi.features;return n.createElement(I.Z,{features:t,location:l},n.createElement("h1",null,n.createElement("a",{href:"https://www.cgi.com/fi/"},n.createElement("img",{src:a,alt:"CGI"}))),n.createElement(c.ZP,{list:t}),n.createElement("aside",{className:"event atk-paivat"},n.createElement("h2",null,"ATK-päivät: Ständi 40-42"),n.createElement("p",null,"Tervetuloa keskustelemaan FHIR-asioista! Sovi mielellään tapaaminen etukäteen.")),n.createElement("section",{id:"omni360"},n.createElement("h2",null,"OMNI360"),n.createElement("p",null,"OMNI360 is a modular and modern solution for healthcare, socialcare and specialized care."),n.createElement("p",null,"CGI has a strong commitment to use HL7 FHIR within our product portfolio and therefore we already have a wide range of different FHIR resources implemented. Future roadmap also contains our next FHIR development targets."),n.createElement("p",null,"FHIR resources already ",n.createElement("strong",null,"in production")," or ",n.createElement("i",null,"being implemented")," are:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("i",null,"Appointment")),n.createElement("li",null,n.createElement("i",null,"Careplan")),n.createElement("li",null,n.createElement("strong",null,"ClinicalDocument")),n.createElement("li",null,n.createElement("i",null,"Composition")),n.createElement("li",null,n.createElement("strong",null,"Condition")),n.createElement("li",null,n.createElement("i",null,"Consent")),n.createElement("li",null,n.createElement("strong",null,"Encounter")),n.createElement("li",null,n.createElement("strong",null,"Immunization")),n.createElement("li",null,n.createElement("strong",null,"Location")),n.createElement("li",null,n.createElement("strong",null,"Observation")),n.createElement("li",null,n.createElement("strong",null,"Organization")),n.createElement("li",null,n.createElement("strong",null,"Patient")),n.createElement("li",null,n.createElement("strong",null,"Practitioner")),n.createElement("li",null,n.createElement("i",null,"Procedure")),n.createElement("li",null,n.createElement("i",null,"RelatedPerson")),n.createElement("li",null,n.createElement("strong",null,"Schedule")),n.createElement("li",null,n.createElement("strong",null,"Task")))),n.createElement("section",{id:"other-products"},n.createElement("h2",null,"Other Products"),n.createElement("p",null,"In addition to OMNI360, CGI uses FHIR API's in ",n.createElement("strong",null,"AVPH")," scheduling solution and in ",n.createElement("strong",null,"Hyvis")," patient portal.")),n.createElement("section",{id:"contact"},n.createElement("h3",null,"Contact"),n.createElement("div",{className:"business-card"},n.createElement("h3",null,"Markus Vehmanen"),n.createElement("p",null,"Vice President, Healthcare & Social Care IT"),n.createElement("address",null,n.createElement("a",{href:"mailto:markus.vehmanen@cgi.com"},"markus.vehmanen@cgi.com")))))}}}]);
//# sourceMappingURL=component---src-pages-cgi-js-0c9a0abb26cb2bcda646.js.map