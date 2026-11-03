(() => {
  const projectData = {
    grow: {
      kicker: "Roblox · Published simulator", title: "Grow A Monster",
      description: "A monster-growing and collection game where players hatch eggs, raise monsters, feed them, and evolve them. Developed and publicly published in Roblox Studio.",
      role: "Roblox Game Developer",
      tech: "Roblox Studio · Luau · Roblox DataStore",
      systems: ["Player data saving and loading", "Egg hatching and shop systems", "Garden and growing-spot management", "Monster growth and evolution mechanics", "Food, progression, and gameplay UI"],
      challenges: "Challenge and solution notes were not included in the supplied project materials.",
      result: "Publicly published Roblox experience with a playable game link and gameplay preview shared on LinkedIn.",
      media: '<div class="media-stack"><a class="linkedin-preview" href="https://www.linkedin.com/posts/devendra-navale_roblox-gamedevelopment-indiegamedev-ugcPost-7521518383989727232-4Zue/" target="_blank" rel="noopener noreferrer" aria-label="Watch Grow A Monster gameplay on LinkedIn"><img loading="lazy" src="./1793119598401-01a17e40-e8d0-7081-bce0-33cfad6e693b.png" alt="Grow A Monster gameplay preview"><span class="linkedin-play" aria-hidden="true">▶</span><strong>Watch Gameplay on LinkedIn ↗</strong></a><img loading="lazy" src="./370684ea-810c-4d45-8b60-98cb500230c0%20(2).jpeg" alt="Grow A Monster gameplay screenshot"></div>',
      action: '<a class="project-action primary" href="https://www.roblox.com/share?code=63b1524d33c34d44b17d2159e722d764&type=ExperienceDetails&stamp=1793269537089" target="_blank" rel="noopener noreferrer">Play on Roblox ↗</a><a class="project-action secondary" href="https://www.linkedin.com/posts/devendra-navale_roblox-gamedevelopment-indiegamedev-ugcPost-7521518383989727232-4Zue/" target="_blank" rel="noopener noreferrer">Watch Gameplay on LinkedIn ↗</a>'
    },
    yuddha: {
      kicker: "Meta Quest · VR game", title: "Yuddhabhumi",
      description: "A VR game released on the Meta platform. Contributed during a Game Development Internship at Blackhole Infiverse.",
      role: "Game Development Intern · BHIV / Blackhole Infiverse",
      tech: "Unity · C# · Meta Quest",
      systems: ["Gameplay mechanics", "UI features", "VR interactions", "Debugging and gameplay optimization"],
      challenges: "Specific challenge-and-solution details were not included in the supplied project materials.",
      result: "Released on the Meta platform with an official Meta Store listing.",
      media: '<div class="media-stack"><img src="./Screenshot%202026-11-03%20123537.png" alt="Yuddhabhumi VR game screenshot"><img src="./Screenshot%202026-11-03%20123511.png" alt="Yuddhabhumi VR game screenshot"><img src="./Screenshot%202026-11-03%20123452.png" alt="Yuddhabhumi VR game screenshot"></div>',
      action: '<a class="project-action primary" href="https://www.meta.com/en-gb/experiences/yuddhabhumi/1285621444625659/" target="_blank" rel="noopener noreferrer">View on Meta Store ↗</a>'
    },
    helmet: {
      kicker: "IoT project", title: "Smart Helmet",
      description: "An IoT project presented as part of Devendra’s project work, with the supplied image documenting the Smart Helmet prototype.",
      role: "Project developer",
      tech: "IoT project",
      systems: ["Prototype project image supplied"],
      challenges: "Technical challenge details were not included in the supplied project materials.",
      result: "Project documentation represented by the supplied prototype image.",
      media: '<img src="./Smart%20Helmet.jpeg" alt="Smart Helmet project">',
      action: ""
    },
    parking: {
      kicker: "IoT project", title: "Car Parking System",
      description: "An IoT project presented as part of Devendra’s project work, with the supplied image documenting the Car Parking System prototype.",
      role: "Project developer",
      tech: "IoT project",
      systems: ["Prototype project image supplied"],
      challenges: "Technical challenge details were not included in the supplied project materials.",
      result: "Project documentation represented by the supplied prototype image.",
      media: '<img src="./Car%20parking%20system.jpg" alt="Car Parking System project">',
      action: ""
    }
  };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const modal = $(".modal"), modalMedia = $(".modal-media"), modalKicker = $("#modal-kicker"), modalTitle = $("#modal-title"), modalDescription = $("#modal-description"), modalRole = $("#modal-role"), modalTech = $("#modal-tech"), modalSystems = $("#modal-systems"), modalChallenges = $("#modal-challenges"), modalResult = $("#modal-result"), modalActions = $(".modal-actions");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.addEventListener("load", () => {
    $(".loader-track span").style.width = "100%";
    setTimeout(() => $(".loader").classList.add("done"), prefersReduced ? 0 : 700);
  });

  if (window.gsap && window.ScrollTrigger && !prefersReduced) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".reveal").forEach((item) => gsap.to(item, { opacity: 1, y: 0, duration: .8, ease: "power2.out", scrollTrigger: { trigger: item, start: "top 88%" } }));
    gsap.to(".hero-copy", { yPercent: 18, ease: "none", scrollTrigger: { trigger: ".hero", scrub: true } });
    gsap.utils.toArray(".project-image img").forEach((image) => gsap.fromTo(image, { scale: 1.08, yPercent: 3 }, { scale: 1, yPercent: -3, ease: "none", scrollTrigger: { trigger: image, start: "top bottom", end: "bottom top", scrub: true } }));
    gsap.utils.toArray(".timeline-item").forEach((item, index) => gsap.fromTo(item, { x: index % 2 ? 24 : -24, opacity: 0 }, { x: 0, opacity: 1, duration: .8, ease: "power2.out", scrollTrigger: { trigger: item, start: "top 84%" } }));
  } else $$(".reveal").forEach((item) => { item.style.opacity = "1"; item.style.transform = "none"; });

  $$(".project-trigger").forEach((trigger) => trigger.addEventListener("click", () => {
    const data = projectData[trigger.closest(".project-card").dataset.project];
    modalMedia.innerHTML = data.media; modalKicker.textContent = data.kicker; modalTitle.textContent = data.title; modalDescription.textContent = data.description; modalRole.textContent = data.role; modalTech.textContent = data.tech; modalSystems.innerHTML = `<ul>${data.systems.map((system) => `<li>${system}</li>`).join("")}</ul>`; modalChallenges.textContent = data.challenges; modalResult.textContent = data.result; modalActions.innerHTML = data.action;
    modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); document.body.classList.add("modal-open"); $(".modal-close").focus();
  }));
  const closeModal = () => { if (document.activeElement instanceof HTMLElement) document.activeElement.blur(); modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); document.body.classList.remove("modal-open"); modalMedia.innerHTML = ""; };
  $(".modal-close").addEventListener("click", closeModal); $(".modal-backdrop").addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && modal.classList.contains("open")) closeModal(); });
  $$(".cert-card").forEach((card) => card.addEventListener("click", () => window.open(card.dataset.cert, "_blank", "noopener")));

  const menuToggle = $(".menu-toggle"), mobileMenu = $(".mobile-menu");
  const closeMobileMenu = () => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  };
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });
  $$(".mobile-menu a").forEach((link) => link.addEventListener("click", closeMobileMenu));
  $(".mobile-menu-back").addEventListener("click", closeMobileMenu);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) closeMobileMenu();
  });

  if (window.matchMedia("(pointer:fine)").matches) {
    const cursor = $(".cursor"), ring = $(".cursor-ring");
    window.addEventListener("pointermove", (event) => { cursor.style.left = `${event.clientX}px`; cursor.style.top = `${event.clientY}px`; ring.animate({ left: `${event.clientX}px`, top: `${event.clientY}px` }, { duration: 250, fill: "forwards" }); });
    $$("a,button").forEach((element) => { element.addEventListener("mouseenter", () => document.body.classList.add("hovering")); element.addEventListener("mouseleave", () => document.body.classList.remove("hovering")); });
  }

  const canvas = $("#scene");
  if (window.THREE && canvas && !prefersReduced) {
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.35)); renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    const scene = new THREE.Scene(); scene.fog = new THREE.Fog(0x090a0d, 7, 24);
    const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, .1, 100); camera.position.set(0, 0, 9);
    const group = new THREE.Group(); scene.add(group);
    const ambient = new THREE.HemisphereLight(0x707080, 0x090a0d, .7);
    const keyLight = new THREE.DirectionalLight(0xd6c49c, 1.15);
    keyLight.position.set(-4, 6, 5); keyLight.castShadow = true; keyLight.shadow.mapSize.set(512, 512);
    keyLight.shadow.camera.near = 1; keyLight.shadow.camera.far = 25; keyLight.shadow.camera.left = -8; keyLight.shadow.camera.right = 8; keyLight.shadow.camera.top = 8; keyLight.shadow.camera.bottom = -8;
    const redLight = new THREE.PointLight(0x9d3e35, 2.2, 9, 2); redLight.position.set(3, -1, 1);
    scene.add(ambient, keyLight, redLight);
    const ground = new THREE.Mesh(new THREE.CircleGeometry(15, 32), new THREE.MeshStandardMaterial({ color: 0x101114, roughness: .92, metalness: .05 }));
    ground.rotation.x = -Math.PI / 2; ground.position.y = -2.35; ground.receiveShadow = true; scene.add(ground);
    const distantMaterial = new THREE.MeshStandardMaterial({ color: 0x1b1b20, roughness: 1, metalness: 0 });
    const warmMaterial = new THREE.MeshStandardMaterial({ color: 0x6f5731, emissive: 0x2d1d0f, emissiveIntensity: .7, roughness: .8 });
    const addMonolith = (x, y, z, scale, rotation) => {
      const monolith = new THREE.Mesh(new THREE.CylinderGeometry(.28, .5, 2.6, 5), distantMaterial);
      monolith.position.set(x, y, z); monolith.scale.setScalar(scale); monolith.rotation.y = rotation; monolith.castShadow = true; group.add(monolith);
    };
    addMonolith(-4.8, -.95, -2.8, 1.5, .2); addMonolith(4.5, -1.15, -3.8, 1.9, -.35); addMonolith(-7, -.75, -6.5, 2.6, .5);
    const lanterns = [];
    [-3.8, 3.8].forEach((x, index) => {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(.035, .06, 1.3, 6), distantMaterial);
      post.position.set(x, -1.7, -1.8 - index); post.castShadow = true; group.add(post);
      const glow = new THREE.Mesh(new THREE.OctahedronGeometry(.16, 0), warmMaterial);
      glow.position.set(x, -1.05, -1.8 - index); group.add(glow); lanterns.push(glow);
    });
    const geometry = new THREE.BufferGeometry(), count = window.innerWidth < 700 ? 260 : 460, positions = new Float32Array(count * 3), drift = new Float32Array(count);
    for (let i = 0; i < count * 3; i += 3) { positions[i] = (Math.random() - .5) * 17; positions[i + 1] = (Math.random() - .5) * 9; positions[i + 2] = (Math.random() - .5) * 12 - 1; drift[i / 3] = Math.random() * Math.PI * 2; }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xbba77a, size: .035, transparent: true, opacity: .5, sizeAttenuation: true }));
    group.add(particles);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(3.2, .008, 8, 96), new THREE.MeshBasicMaterial({ color: 0x9d3e35, transparent: true, opacity: .25 }));
    ring.rotation.x = Math.PI / 2.4; ring.position.z = -2; group.add(ring);
    const worldGroups = [];
    const addWorldGroup = (z) => { const environment = new THREE.Group(); environment.position.z = z; group.add(environment); worldGroups.push(environment); return environment; };
    const panelMaterial = new THREE.MeshStandardMaterial({ color: 0x252327, roughness: .8, metalness: .2 });
    const goldMaterial = new THREE.MeshStandardMaterial({ color: 0x9b8051, emissive: 0x2d1f0c, emissiveIntensity: .55, roughness: .65 });
    const addPillar = (environment, x, height, zOffset = 0) => {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(.22, height, .22), panelMaterial);
      pillar.position.set(x, height / 2 - 2.25, zOffset); pillar.castShadow = true; environment.add(pillar);
      const cap = new THREE.Mesh(new THREE.BoxGeometry(.34, .05, .34), goldMaterial);
      cap.position.set(x, height - 2.2, zOffset); environment.add(cap);
    };
    const workspace = addWorldGroup(-7);
    const desk = new THREE.Mesh(new THREE.BoxGeometry(4.6, .18, 1.35), panelMaterial);
    desk.position.set(0, -1.35, 0); desk.castShadow = true; workspace.add(desk);
    [-1.9, 1.9].forEach((x) => { const leg = new THREE.Mesh(new THREE.BoxGeometry(.14, 1.3, .14), panelMaterial); leg.position.set(x, -1.9, 0); leg.castShadow = true; workspace.add(leg); });
    const monitor = new THREE.Mesh(new THREE.BoxGeometry(1.7, .85, .08), goldMaterial); monitor.position.set(0, -.72, -.28); workspace.add(monitor);
    const monitorStand = new THREE.Mesh(new THREE.BoxGeometry(.08, .45, .08), panelMaterial); monitorStand.position.set(0, -1.1, -.28); workspace.add(monitorStand);
    addPillar(workspace, -3.2, 2.2, -1.2); addPillar(workspace, 3.2, 1.6, -2);
    const skillsWorld = addWorldGroup(-14);
    [-2.4, -.8, .8, 2.4].forEach((x, index) => {
      const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(.42, .5, .28, 8), panelMaterial);
      pedestal.position.set(x, -2.08, 0); pedestal.castShadow = true; skillsWorld.add(pedestal);
      const glyph = new THREE.Mesh(new THREE.OctahedronGeometry(.28 + index * .035, 0), goldMaterial);
      glyph.position.set(x, -1.58, 0); glyph.rotation.y = index * .6; skillsWorld.add(glyph);
    });
    addPillar(skillsWorld, -4.4, 1.8, -1.5); addPillar(skillsWorld, 4.4, 2.5, -2);
    const gallery = addWorldGroup(-21);
    [-2.8, 0, 2.8].forEach((x, index) => {
      const frame = new THREE.Mesh(new THREE.BoxGeometry(2.15, 1.35, .12), panelMaterial);
      frame.position.set(x, -.75, index === 1 ? -.35 : 0); frame.rotation.y = index === 0 ? .08 : index === 2 ? -.08 : 0; frame.castShadow = true; gallery.add(frame);
      const accent = new THREE.Mesh(new THREE.BoxGeometry(1.7, .06, .06), goldMaterial);
      accent.position.set(x, -.1, frame.position.z - .1); accent.rotation.y = frame.rotation.y; gallery.add(accent);
    });
    const timelineWorld = addWorldGroup(-28);
    [-3, -1, 1, 3].forEach((x, index) => addPillar(timelineWorld, x, 1.1 + index * .4, -.4));
    const contactWorld = addWorldGroup(-35);
    const portal = new THREE.Mesh(new THREE.TorusGeometry(2.25, .055, 8, 48), goldMaterial);
    portal.position.set(0, .1, 0); portal.rotation.y = Math.PI / 2; portal.castShadow = true; contactWorld.add(portal);
    const portalCore = new THREE.Mesh(new THREE.CircleGeometry(1.9, 32), new THREE.MeshBasicMaterial({ color: 0x171418, transparent: true, opacity: .75 }));
    portalCore.position.set(0, .1, -.02); portalCore.rotation.y = Math.PI / 2; contactWorld.add(portalCore);
    const onResize = () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); };
    window.addEventListener("resize", onResize);
    const cameraPath = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 9),
      new THREE.Vector3(-1.25, .35, 3.5),
      new THREE.Vector3(1.7, -.1, -2.5),
      new THREE.Vector3(.7, .55, -8),
      new THREE.Vector3(-1.9, -.35, -14),
      new THREE.Vector3(1.2, .15, -20.5),
      new THREE.Vector3(-.8, .45, -27),
      new THREE.Vector3(0, -.05, -35), 
      new THREE.Vector3(.35, .1, -39)
    ], false, "catmullrom", .35);
    const cameraLookPath = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, -1.5),
      new THREE.Vector3(-.25, .1, -3.2),
      new THREE.Vector3(.35, 0, -8.5),
      new THREE.Vector3(-.3, .15, -14),
      new THREE.Vector3(.4, -.1, -20.5),
      new THREE.Vector3(-.2, .1, -27),
      new THREE.Vector3(.25, 0, -34),
      new THREE.Vector3(0, 0, -39)
    ], false, "catmullrom", .35);
    const currentCameraPosition = new THREE.Vector3(0, 0, 9);
    const currentLookTarget = new THREE.Vector3(0, 0, -1.5);
    let mouseX = 0, mouseY = 0, scrollProgress = 0;
    window.addEventListener("pointermove", (event) => { mouseX = (event.clientX / window.innerWidth - .5) * .35; mouseY = (event.clientY / window.innerHeight - .5) * .25; });
    const updateWorldProgress = () => { const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1); scrollProgress = window.scrollY / maxScroll; };
    window.addEventListener("scroll", updateWorldProgress, { passive: true }); updateWorldProgress();
    const animate = (time) => {
      const seconds = time * .001;
      group.rotation.y += .00012; ring.rotation.z = seconds * .06;
      const particlePositions = geometry.attributes.position.array;
      for (let i = 0; i < count; i += 1) { particlePositions[i * 3 + 1] += Math.sin(seconds * .18 + drift[i]) * .00045; particlePositions[i * 3] += Math.cos(seconds * .13 + drift[i]) * .00018; }
      geometry.attributes.position.needsUpdate = true;
      lanterns.forEach((lantern, index) => { lantern.scale.setScalar(.9 + Math.sin(seconds * 1.2 + index) * .08); });
      worldGroups.forEach((environment, index) => { environment.rotation.y = Math.sin(seconds * .16 + index) * .018; environment.position.y = Math.sin(seconds * .3 + index) * .035; });
      portal.rotation.z = seconds * .12;
      const pathPosition = cameraPath.getPointAt(THREE.MathUtils.clamp(scrollProgress, 0, 1));
      const lookPosition = cameraLookPath.getPointAt(THREE.MathUtils.clamp(scrollProgress, 0, 1));
      const nextLookPosition = cameraLookPath.getPointAt(THREE.MathUtils.clamp(scrollProgress + .035, 0, 1));
      pathPosition.x += mouseX * .7; pathPosition.y += -mouseY * .45 + Math.sin(seconds * .18) * .035;
      currentCameraPosition.lerp(pathPosition, .035);
      currentLookTarget.lerp(nextLookPosition, .045);
      camera.position.copy(currentCameraPosition);
      camera.rotation.z += ((nextLookPosition.x - lookPosition.x) * -.018 - camera.rotation.z) * .025;
      camera.lookAt(currentLookTarget);
      renderer.render(scene, camera); requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  } else if (canvas) canvas.style.display = "none";
})();
