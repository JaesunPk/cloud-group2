import{T as I,G as R,S as T,P as B,O as G,W,B as k,C,a as M,b as q,A as E,c as L,V as O,d as D}from"./lil-gui.esm-edbgO7X8.js";new I;const F=new R;F.hide();const P=document.querySelector("canvas.webgl"),u=new T,e={},H={};e.count=5e4;e.size=.01;e.randomnessPower=20;e.scale=5;e.innerColor="#FF761F";e.outerColor="#FF3E1F";let c=null,g=null,m=null;const a=()=>{m!=null&&(c.dispose(),g.dispose(),u.remove(m)),c=new k;const n=new Float32Array(e.count*3),s=new Float32Array(e.count*3),d=Math.PI*2/e.count,y=new C(e.innerColor),A=new C(e.outerColor);for(let h=0;h<e.count;h++){const o=h*3,p=d*h,b=Math.pow(Math.random(),e.randomnessPower)*(Math.random()<.5?1:-1),f=Math.pow(Math.random(),e.randomnessPower)*(Math.random()<.5?1:-1),v=Math.pow(Math.random(),e.randomnessPower)*(Math.random()<.5?1:-1);n[o]=6*Math.cos(p*8)+v,n[o+1]=6*Math.sin(p*7)*Math.sin(p*5)+b,n[o+2]=e.scale*f;const S=Math.sqrt(n[o]**2+n[o+1]**2+n[o+2]**2)/e.scale,w=y.clone();w.lerp(A,S),s[o]=w.r,s[o+1]=w.g,s[o+2]=w.b}c.setAttribute("position",new M(n,3)),c.setAttribute("color",new M(s,3)),g=new q({sizeAttenuation:!0,blending:E,size:e.size,depthTest:!0,vertexColors:!0,transparent:!0,opacity:1}),m=new L(c,g),u.add(m)};a();const r=F.addFolder("Infinity");r.add(e,"count").min(100).max(1e5).step(1).onFinishChange(a);r.add(e,"size").min(.01).max(1).step(.001).onFinishChange(a);r.add(e,"randomnessPower").min(1).max(100).step(.001).onFinishChange(a);r.add(e,"scale").min(1).max(10).step(.001).onFinishChange(a);r.addColor(e,"innerColor").onFinishChange(a);r.addColor(e,"outerColor").onFinishChange(a);r.add(H,"idleAnimation");const t={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{t.width=window.innerWidth,t.height=window.innerHeight,i.aspect=t.width/t.height,i.updateProjectionMatrix(),l.setSize(t.width,t.height),l.setPixelRatio(Math.min(window.devicePixelRatio,2))});const i=new B(75,t.width/t.height,.1,100);i.position.x=0;i.position.y=0;i.position.z=0;u.add(i);const x=new G(i,P);x.enableDamping=!0;const l=new W({canvas:P});l.setSize(t.width,t.height);l.setPixelRatio(Math.min(window.devicePixelRatio,2));const V=new D,z=()=>{const n=V.getElapsedTime(),s=20;let d=new O(s*Math.sin(n*.25),0,s*Math.cos(n));i.position.set(d.x,d.y,d.z),x.update(),l.render(u,i),window.requestAnimationFrame(z)};z();
//# sourceMappingURL=gamma-BagH25lr.js.map
