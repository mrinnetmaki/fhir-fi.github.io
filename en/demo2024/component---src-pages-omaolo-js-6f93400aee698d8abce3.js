"use strict";(self.webpackChunkfhir_demo_2024=self.webpackChunkfhir_demo_2024||[]).push([[278],{9498:function(M,N,j){j.d(N,{A:function(){return E}});j(2041);var e=j(6540),D=j(4810),I=j(6194),z=j(7507),T=j(2154),y=j(2854),c=j(6548);const t=(0,D.Fe)("/");function E(M){let{children:N,location:j}=M;const{search:E,pathname:l}=j,{selectedRoles:a={}}=e.useContext(T.li),n=Object.keys(a).sort(),L=Object.keys(z.n).filter((M=>{var N;return!n.length||(null===(N=z.n[M].roles)||void 0===N?void 0:N.some((M=>n.some((N=>N===M)))))})),g=L.indexOf(l.replace(t,"").replaceAll("/","")),u=L.length>1?e.createElement("nav",{className:"prevNext"},e.createElement("div",null,g>0?e.createElement(D.N_,{to:"/"+L[g-1]+E},e.createElement("div",null,e.createElement("span",{className:"navSymbol"},"<")," "," ",e.createElement("span",{className:"navText"},"Previous")," "," ",e.createElement("img",{src:y.A,alt:""}))):e.createElement(D.N_,{to:"/"+L[L.length-1]+E},e.createElement("div",null,e.createElement("span",{className:"navSymbol"},"<")," "," ",e.createElement("span",{className:"navText"},"Last")," "," ",e.createElement("img",{src:y.A,alt:""})))),e.createElement("div",null,g<L.length-1?e.createElement(D.N_,{to:"/"+L[g+1]+E},e.createElement("div",null,e.createElement("img",{src:y.A,alt:""})," "," ",e.createElement("span",{className:"navText"},"Next")," "," ",e.createElement("span",{className:"navSymbol"},">"))):e.createElement(D.N_,{to:"/"+L[0]+E},e.createElement("div",null,e.createElement("img",{src:y.A,alt:""})," "," ",e.createElement("span",{className:"navText"},"First")," "," ",e.createElement("span",{className:"navSymbol"},">"))))):null;return e.createElement(I.A,{id:"demo"},e.createElement("header",null,e.createElement("h1",null,"FHIR Demo 2024 ",e.createElement("img",{className:"inline",src:y.A,alt:""})),n.length?e.createElement(e.Fragment,null,e.createElement("hr",null),e.createElement("h3",null,g>=0?e.createElement(e.Fragment,null,"Participant #"+(g+1)+" of "+L.length+" with role"+(n.length>1?"s":""),e.createElement("span",{className:"ariaHelp"}," ",n.join(" or "))):null,e.createElement(T.Ay,{list:T.Z4})),e.createElement("hr",null)):e.createElement("p",null,"Participant #"+(g+1)+" / "+L.length)),u,e.createElement("main",{className:"demo"},N),u,e.createElement("img",{className:"decoration",src:c.A,alt:""}))}},6893:function(M,N,j){j.r(N),j.d(N,{Head:function(){return c},default:function(){return t}});var e=j(6540),D=j(6194),I=j(9498),z=j(2154),T=j(7507),y="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA2MHB4IiBoZWlnaHQ9IjIwMXB4IiB2aWV3Qm94PSIwIDAgMTA2MCAyMDEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iS2FudGEtaWxtZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ik9EQS1VSS1BVE9NUy1Db3B5LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MjAuMDAwMDAwLCAtMjYyNi4wMDAwMDApIiBmaWxsPSIjMDA2NkExIj4KICAgICAgICAgICAgPHBhdGggZD0iTTc1NS41NDQ2NzIsMjcyNS43OTI4MyBDNzU1LjU0NDY3MiwyNzYxLjAyMDkyIDc4Mi4xOTE2OTksMjc5MS43ODM0OCA4MTguODAwMjMyLDI3OTEuNzgzNDggQzg1NS4xNTk3MjcsMjc5MS43ODM0OCA4ODIuMDU1NzkyLDI3NjEuMDIwOTIgODgyLjA1NTc5MiwyNzI1Ljc5MjgzIEM4ODIuMDU1NzkyLDI2OTAuNTY0NzUgODU1LjE1OTcyNywyNjU5LjMwNjAyIDgxOC44MDAyMzIsMjY1OS4zMDYwMiBDNzgyLjE5MTY5OSwyNjU5LjMwNjAyIDc1NS41NDQ2NzIsMjY5MC41NjQ3NSA3NTUuNTQ0NjcyLDI3MjUuNzkyODMgWiBNMTMzMy43NjMwNSwyNjgxLjM5NzA0IEwxMzUwLjAwNzc0LDI2NjQuNjEyMTggTDEzNTAuMDIwMDQsMjY2NC41ODcyMyBMMTM2Ni43NDY5NywyNjY0LjU4NzIzIEwxMzY2Ljc0Njk3LDI4MjIuODQ5NyBMMTMzNy40NzQ4NCwyODIyLjg0OTcgTDEzMzUuNTQ0ODEsMjgwMC4zMzI2OCBDMTMyMy42NDI5NiwyODE2LjQxNjI2IDEzMDEuNzY5MjksMjgyNi4wNjY0MSAxMjgyLjE0NzMxLDI4MjYuMDY2NDEgQzEyMzkuMzY0OTgsMjgyNi4wNjY0MSAxMjA1LjI2Nzc4LDI3OTAuNjgyNTMgMTIwNS4yNjc3OCwyNzQ0LjA0MDEzIEMxMjA1LjI2Nzc4LDI2OTguMDQxMDggMTIzOS4zNjQ5OCwyNjYyLjMzNTUzIDEyODQuMzk5MDEsMjY2Mi4zMzU1MyBDMTMwMS4xMzEyOSwyNjYyLjMzNTUzIDEzMTkuODYzODEsMjY2OC44MzYzMiAxMzMzLjc2MzA1LDI2ODEuMzk3MDQgWiBNOTcyLjUyNzIzNiwyNjc5Ljk2MjU0IEM5ODIuOTA1MDUzLDI2NjkuNTIzNjUgOTk3LjYyNzEzMiwyNjYyLjMzNTUzIDEwMTMuNzQwNDYsMjY2Mi4zMzU1MyBDMTAzNS45MzU4MSwyNjYyLjMzNTUzIDEwNTUuNTU3NzgsMjY3MS45ODU2OCAxMDY3Ljc4MTMsMjY4OS4zNTU5NSBDMTA4MC45Njk4NCwyNjcxLjY2NCAxMTAwLjI3MDE0LDI2NjIuMzM1NTMgMTEyMC41MzU0NiwyNjYyLjMzNTUzIEMxMTU4LjE3MTA1LDI2NjIuMzM1NTMgMTE4NS44MzQ4MSwyNjg4LjM5MDkzIDExODUuODM0ODEsMjczMi4xMzgyOCBMMTE4NS44MzQ4MSwyODIyLjg0OTcgTDExNTIuMDU5MjgsMjgyMi44NDk3IEwxMTUyLjA1OTI4LDI3MzQuNzExNjUgQzExNTIuMDU5MjgsMjcxMS41NTEyOSAxMTQyLjA4NzQ2LDI2OTQuNTAyNjkgMTExNy4zMTg3NCwyNjk0LjUwMjY5IEMxMTAwLjU5MTgxLDI2OTQuNTAyNjkgMTA4Ni4xMTY1OSwyNzA1LjQzOTUzIDEwODAuMzI2NSwyNzIwLjU1ODEgTDEwODAuMzI2NSwyODIyLjg0OTcgTDEwNDYuNTUwOTcsMjgyMi44NDk3IEwxMDQ2LjU1MDk3LDI3MzQuNzExNjUgQzEwNDYuNTUwOTcsMjcxMC4yNjQ2MSAxMDM0LjMyNzQ1LDI2OTQuNTAyNjkgMTAxMC41MjM3NCwyNjk0LjUwMjY5IEM5OTMuNzk2ODE1LDI2OTQuNTAyNjkgOTc4Ljk5OTkxOCwyNzA0Ljc5NjE5IDk3Mi44ODgxNTYsMjcyMC41NTgxIEw5NzIuODg4MTU2LDI4MjIuODQ5NyBMOTM4Ljc5MDk1NywyODIyLjg0OTcgTDkzOC43OTA5NTcsMjY2NC41ODcyMyBMOTU1LjE5NjIxMywyNjY0LjU4NzIzIEw5NTUuMjAzODI3LDI2NjQuNjAwNDUgTDk1NS4yMDM4MjcsMjY2NC41OTQ0OCBMOTcyLjUyNzIzNiwyNjc5Ljk2MjU0IFogTTcyMCwyNzI2LjMyNjQgQzcyMCwyNjcxLjUzMDcxIDc2Mi43ODI0OTgsMjYyNiA4MTkuMTE3MjE3LDI2MjYgQzg3NS4xODYyMDYsMjYyNiA5MTcuOTY4NzA0LDI2NzEuNTMwNzEgOTE3Ljk2ODcwNCwyNzI2LjMyNjQgQzkxNy45Njg3MDQsMjc4MS4xMjIwOCA4NzUuMTg2MjA2LDI4MjYuMzg4MDkgODE5LjExNzIxNywyODI2LjM4ODA5IEM3NjIuNzgyNDk4LDI4MjYuMzg4MDkgNzIwLDI3ODEuMTIyMDggNzIwLDI3MjYuMzI2NCBaIE0xMjM5LjY4NjY1LDI3NDQuMDQwMTMgQzEyMzkuNjg2NjUsMjc3Mi4zNDcyNCAxMjU4Ljk4Njk1LDI3OTQuMjIwOTIgMTI4Ni4wMDczNywyNzk0LjIyMDkyIEMxMzEzLjM0OTQ3LDI3OTQuMjIwOTIgMTMzMi42NDk3NywyNzcyLjM0NzI0IDEzMzIuNjQ5NzcsMjc0Mi40MzE3OCBDMTMzMi42NDk3NywyNzE2LjA1NDcgMTMxMy4zNDk0NywyNjk0LjE4MTAyIDEyODYuMDA3MzcsMjY5NC4xODEwMiBDMTI1OS4zMDg2MiwyNjk0LjE4MTAyIDEyMzkuNjg2NjUsMjcxNi4wNTQ3IDEyMzkuNjg2NjUsMjc0NC4wNDAxMyBaIE0xMzg3LjExMzU3LDI3NDQuMDQwMTMgQzEzODcuMTEzNTcsMjY5OS4wMDYxIDE0MTguNjM3MzksMjY2Mi4zMzU1MyAxNDY2Ljg4ODE0LDI2NjIuMzM1NTMgQzE1MTQuMTczODgsMjY2Mi4zMzU1MyAxNTQ2LjY2MjcyLDI2OTkuMDA2MSAxNTQ2LjY2MjcyLDI3NDQuMDQwMTMgQzE1NDYuNjYyNzIsMjc4OS4zOTU4NCAxNTE0LjE3Mzg4LDI4MjYuMDY2NDEgMTQ2Ni44ODgxNCwyODI2LjA2NjQxIEMxNDE5LjYwMjQxLDI4MjYuMDY2NDEgMTM4Ny4xMTM1NywyNzg5LjM5NTg0IDEzODcuMTEzNTcsMjc0NC4wNDAxMyBaIE0xNDIxLjUzMjQ0LDI3NDQuMDQwMTMgQzE0MjEuNTMyNDQsMjc3MS43MDM5IDE0MzkuNTQ2MDUsMjc5My41Nzc1NyAxNDY2Ljg4ODE0LDI3OTMuNTc3NTcgQzE0OTQuMjMwMjQsMjc5My41Nzc1NyAxNTEyLjI0Mzg1LDI3NzEuNzAzOSAxNTEyLjI0Mzg1LDI3NDQuMDQwMTMgQzE1MTIuMjQzODUsMjcxNi42OTgwNCAxNDk0LjIzMDI0LDI2OTQuNTAyNjkgMTQ2Ni44ODgxNCwyNjk0LjUwMjY5IEMxNDM5LjU0NjA1LDI2OTQuNTAyNjkgMTQyMS41MzI0NCwyNzE2LjY5ODA0IDE0MjEuNTMyNDQsMjc0NC4wNDAxMyBaIE0xNjAwLjQ2NzQ5LDI2MjkuMDIyODkgTDE2MDAuNDY3NDksMjgyMi44NDk3IEwxNTY2LjM3MDI5LDI4MjIuODQ5NyBMMTU2Ni4zNzAyOSwyNjI5LjAyMjg5IEwxNjAwLjQ2NzQ5LDI2MjkuMDIyODkgWiBNMTYyMC4xNzUwNSwyNzQ0LjA0MDEzIEMxNjIwLjE3NTA1LDI2OTkuMDA2MSAxNjUxLjY5ODg4LDI2NjIuMzM1NTMgMTY5OS45NDk2MywyNjYyLjMzNTUzIEMxNzQ3LjIzNTM3LDI2NjIuMzM1NTMgMTc3OS43MjQyMSwyNjk5LjAwNjEgMTc3OS43MjQyMSwyNzQ0LjA0MDEzIEMxNzc5LjcyNDIxLDI3ODkuMzk1ODQgMTc0Ny4yMzUzNywyODI2LjA2NjQxIDE2OTkuOTQ5NjMsMjgyNi4wNjY0MSBDMTY1Mi42NjM4OSwyODI2LjA2NjQxIDE2MjAuMTc1MDUsMjc4OS4zOTU4NCAxNjIwLjE3NTA1LDI3NDQuMDQwMTMgWiBNMTY1NC41OTM5MiwyNzQ0LjA0MDEzIEMxNjU0LjU5MzkyLDI3NzEuNzAzOSAxNjcyLjYwNzU0LDI3OTMuNTc3NTcgMTY5OS45NDk2MywyNzkzLjU3NzU3IEMxNzI3LjI5MTczLDI3OTMuNTc3NTcgMTc0NS4zMDUzNCwyNzcxLjcwMzkgMTc0NS4zMDUzNCwyNzQ0LjA0MDEzIEMxNzQ1LjMwNTM0LDI3MTYuNjk4MDQgMTcyNy4yOTE3MywyNjk0LjUwMjY5IDE2OTkuOTQ5NjMsMjY5NC41MDI2OSBDMTY3Mi42MDc1NCwyNjk0LjUwMjY5IDE2NTQuNTkzOTIsMjcxNi42OTgwNCAxNjU0LjU5MzkyLDI3NDQuMDQwMTMgWiIgaWQ9Ik9tYW9sbyI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==";function c(){const M=e.createElement("title",null,"FHIR Demo 2024: Omaolo (DigiFinland)");return(0,D.x)({title:M})}function t(M){var N;let{location:j}=M;const D=null===(N=T.n.omaolo)||void 0===N?void 0:N.roles;return e.createElement(I.A,{roles:D,location:j},e.createElement("h1",null,e.createElement("a",{href:"https://www.omaolo.fi/"},e.createElement("img",{src:y,alt:"Omaolo"}))),e.createElement(z.Ay,{list:D}),e.createElement("p",null,"Demo description will be added soon."),e.createElement("section",{id:"contact"},e.createElement("h3",null,"Contact"),e.createElement("div",{className:"business-card"},e.createElement("h3",null,"Juha Eerola"),e.createElement("p",null,"Product Owner"),e.createElement("address",null,e.createElement("a",{href:"mailto:juha.eerola@digifinland.fi"},"juha.eerola@digifinland.fi")))))}}}]);
//# sourceMappingURL=component---src-pages-omaolo-js-6f93400aee698d8abce3.js.map