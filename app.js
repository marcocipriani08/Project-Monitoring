/**
 * Project Monitoring — Logica dell'Applicazione Interattiva
 * Gestione dello stato, disegno linee SVG reattive, effetti e simulatori.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dati dei nodi strategici per la compilazione dei pannelli (Italiano Executive)
    const nodeData = {
        tempo: {
            title: "TIME",
            category: "Schedule management",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
            description: "Ottimizzazione della pianificazione temporale e presidio costante delle milestone. Analisi strategica del percorso critico (Critical Path) per neutralizzare i colli di bottiglia e ottimizzare la produttività del team.",
            activities: [
                "<strong>Monitoraggio Giornaliero (Everyday Tracking):</strong> Aggiornamento costante dell'avanzamento dei task operativi e allineamento con i capiprogetto per identificare deviazioni anticipate.",
                "<strong>Tracciamento Orario (Hourly Monitoring):</strong> Analisi granulare dell'allocazione oraria sulle attività a massimo rischio per garantire la massima eficiência dei flussi operativi."
            ],
            perfVal: 94,
            statusLabel: "Sotto Controllo",
            statusText: "Le milestone critiche rientrano perfettamente nelle baseline stabilite. Nessuna deviazione temporale registrata.",
            isCritical: false
        },
        costi: {
            title: "COST",
            category: "Cost Management",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
            description: "Supervisione dei flussi di cassa del progetto. Monitoraggio costante delle spese correnti rispetto al budget stimato per garantire la profittabilità globale e prevenire fenomeni di budget overrun.",
            activities: [
                "<strong>Gestione Indiretta (Managing Indirectly):</strong> Analisi e allocazione controllata dei costi di overhead, delle licenze software e delle spese infrastrutturali correlate.",
                "<strong>Tracciamento e Verifica (Tracked and Reviewed):</strong> Audit mensili con metodologia Earned Value Management (EVM) per confrontare la spesa effettiva (AC) con il valore pianificato (PV)."
            ],
            perfVal: 88,
            statusLabel: "Sotto Controllo",
            statusText: "La varianza dei costi (Cost Variance) si attesta ampiamente entro il margine di tolleranza concordato (+/- 5%).",
            isCritical: false
        },
        ambito: {
            title: "SCOPE",
            category: "Scope Creep & Change Control",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>`,
            description: "Presidio strutturato dei confini operativi del progetto. Definizione formale dei deliverable per prevenire variazioni non strutturate dei requisiti e garantire l'aderenza agli obiettivi di business contrattuali.",
            activities: [
                "<strong>Gestione delle Variazioni (Scope Changing):</strong> Canale standardizzato per l'acquisizione, la stima dell'impatto tecnico-economico e la formalizzazione dei requisiti aggiuntivi.",
                "<strong>Controllo della Deriva (Scope Creep):</strong> Monitoraggio proattivo delle richieste informali per evitare l'estensione dell'ambito senza adeguamento di risorse e tempi.",
                "<strong>Change Control Board (CCB):</strong> Gestione del comitato di approvazione formale delle modifiche con gli stakeholder chiave per la ratifica delle varianti di progetto."
            ],
            perfVal: 91,
            statusLabel: "Sotto Controllo",
            statusText: "Tutte le integrazioni di ambito dell'ultimo trimestre sono state processate ed approvate formalmente dal CCB.",
            isCritical: false
        },
        rischi: {
            title: "RISK",
            category: "Mitigazione & Prevenzione",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
            description: "Identificazione anticipata dei fattori di incertezza interni ed esterni. Sviluppo di matrici di impatto/probabilità e pianificazione delle risposte di contingenza per minimizzare le minacce agli obiettivi chiave.",
            activities: [
                "<strong>Allineamento Settimanale (Weekly Status Meeting):</strong> Sessioni dedicate con i lead tecnici per aggiornare il registro dei rischi e rivalutare l'esposizione complessiva.",
                "<strong>Coinvolgimento Stakeholder (Stakeholders Collaboration):</strong> Trasparenza sui rischi strategici e coordinamento dei piani di risposta condivisi con i committenti."
            ],
            perfVal: 85,
            statusLabel: "Attenzione Richiesta",
            statusText: "È stata registrata una criticità potenziale nell'approvvigionamento dei server cloud. Piano di contingenza secondario attivato.",
            isCritical: true
        },
        issues: {
            title: "ISSUES",
            category: "Issue Management",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
            description: "Individuazione tempestiva e risoluzione strutturata di blocchi operativi o problemi imprevisti. Focus sul tracciamento e sulla contrazione del tempo medio di risoluzione (Mean Time to Resolution).",
            activities: [
                "<strong>Identificazione (Identify):</strong> Rilevamento automatico e classificazione immediata del problema attraverso canali di comunicazione dedicati.",
                "<strong>Valutazione & Priorità (Evaluate & Prioritize):</strong> Stima dell'urgenza operativa e allocazione dei tecnici specialistici per ridurre l'impatto sui flussi aziendali.",
                "<strong>Risoluzione (Deal With It):</strong> Esecuzione delle azioni correttive mirate, test di validazione e chiusura formale del ticket di incident."
            ],
            perfVal: 95,
            statusLabel: "Sotto Controllo",
            statusText: "Le criticità operative aperte risultano gestite nei tempi limite prestabiliti. MTTR medio a 3.4 ore.",
            isCritical: false
        },
        msr: {
            title: "MONTHLY STATUS REVIEW",
            category: "Status Meeting & Reporting",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
            description: "Verifica periodica globale dello stato del progetto con gli sponsor ed i direttori d'area. Rappresenta il momento chiave per consolidare i report e convalidare la direzione di marcia strategica.",
            activities: [
                "<strong>Indicatori Chiave (KPI Analysis):</strong> Analisi quantitativa dello scostamento dei KPI e report sull'efficienza di esecuzione complessiva.",
                "<strong>Allineamento Sponsor (Stakeholders Governance):</strong> Presentazione esecutiva dello stato del progetto al comitato direttivo per decisioni strategiche e sblocchi di risorse."
            ],
            perfVal: 90,
            statusLabel: "Sotto Controllo",
            statusText: "Report strategico mensile approvato formalmente. Tutte le approvazioni dei deliverable sono in regola.",
            isCritical: false
        },
        monitoraggio: {
            title: "MONITORING",
            category: "Hub Strategico Centrale",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="12" r="3" fill="currentColor"/>
                <path d="M12 3V6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M12 18V21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M3 12H6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M18 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>`,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum, ex in feugiat sodales, risus eros sollicitudin lorem, ac finibus tortor purus at lorem. Ut tincidunt ex id lectus scelerisque, nec tincidunt ligula ultrices. Mauris sollicitudin, magna id tristique luctus, magna ante porta purus, convallis condimentum lectus orci sed arcu. Curabitur vel lorem sed metus rhoncus sodales vel ac turpis.",
            activities: [
                "<strong>Lorem Ipsum Dolor:</strong> Proin sit amet eros non sem scelerisque efficitur a ac justo.",
                "<strong>Nullam Malesuada:</strong> Suspendisse vel augue sed turpis consequat facilisis a vel ipsum.",
                "<strong>Donec Consectetur:</strong> Pellentesque sed mi vel nisi dictum hendrerit at sed massa.",
                "<strong>Vestibulum Blandit:</strong> Vestibulum vel lorem at leo convallis pulvinar."
            ],
            perfVal: 92,
            statusLabel: "Hub Centrale Attivo",
            statusText: "Tutti i sistemi e i canali di monitoraggio operano nei parametri prestabiliti.",
            isCritical: false
        }
    };

    // Stato dell'applicazione e posizioni degli slot per i nodi esterni (Drag & Swap)
    let currentSelectedNode = null;

    const slotPositions = [
        { left: '20%', top: '22%' },
        { left: '80%', top: '22%' },
        { left: '86%', top: '50%' },
        { left: '80%', top: '78%' },
        { left: '20%', top: '78%' },
        { left: '14%', top: '50%' }
    ];

    const nodeIds = ['ambito', 'rischi', 'issues', 'msr', 'costi', 'tempo'];
    let currentSlots = [...nodeIds];

    // Elementi DOM principali
    const introScreen = document.getElementById('intro-screen');
    const dashboard = document.getElementById('dashboard');
    const connectionsSvg = document.getElementById('connections-svg');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sidePanel = document.getElementById('side-panel');
    const panelOverlay = document.getElementById('panel-overlay');
    
    const panelTitle = document.getElementById('panel-title');
    const panelIcon = document.getElementById('panel-icon');
    const panelDescription = document.getElementById('panel-description');
    const panelActivities = document.getElementById('panel-activities');
    const panelCloseBtn = document.getElementById('panel-close');
    
    // Elementi del simulatore di performance
    const widgetPerfValue = document.getElementById('widget-perf-value');
    const widgetProgressFill = document.getElementById('widget-progress-fill');
    const widgetToggleCritical = document.getElementById('widget-toggle-critical');
    const panelStatusCard = document.getElementById('panel-status-card');
    const panelStatusText = document.getElementById('panel-status-text');
    const panelActionBtn = document.getElementById('panel-action-btn');

    // 2. Sequenza di Onboarding interattiva su click
    introScreen.addEventListener('click', () => {
        // Disattiva ulteriori click sull'intro
        introScreen.style.pointerEvents = 'none';
        
        // Avvia la transizione di ingrandimento e dissolvenza
        introScreen.classList.add('transition-active');
        
        // Rendi visibile la dashboard immediatamente
        dashboard.classList.remove('hidden');
        
        // Fai comparire i nodi centrali e perimetrali con l'animazione staggering definita in CSS
        setTimeout(() => {
            document.getElementById('mindmap-container').classList.add('active');
        }, 300);
        
        // Disegna le linee di connessione animate in modalità flow (Bézier curves)
        setTimeout(() => {
            drawConnections(true); // passa true per abilitare l'animazione di disegno
        }, 450);


        
        // Rimuovi la schermata intro dallo schermo al termine della transizione
        setTimeout(() => {
            // Rimuovi gli stili inline dei tracciati per ripristinare il flusso infinito tratteggiato in CSS
            document.querySelectorAll('.connection-path').forEach(path => {
                path.style.strokeDasharray = '';
                path.style.strokeDashoffset = '';
                path.style.transition = '';
                path.style.transitionDelay = '';
            });
            
            introScreen.style.display = 'none';
        }, 1200);
    });

    // 3. Disegno delle curve SVG tra i nodi
    function drawConnections(animate = false) {
        if (currentSelectedNode !== null) {
            return;
        }
        // Pulisci i tracciati esistenti
        connectionsSvg.innerHTML = '';
        
        // Non disegnare linee su schermi mobile (layout verticale a cascata)
        if (window.innerWidth <= 768) {
            return;
        }

        const svgRect = connectionsSvg.getBoundingClientRect();
        const centralNode = document.getElementById('node-central');
        if (!centralNode) return;
        
        const centralRect = centralNode.getBoundingClientRect();
        const cX = (centralRect.left + centralRect.width / 2) - svgRect.left;
        const cY = (centralRect.top + centralRect.height / 2) - svgRect.top;

        const outerNodes = document.querySelectorAll('.node-outer');
        
        outerNodes.forEach(node => {
            const nodeId = node.getAttribute('data-node-id');
            const outerRect = node.getBoundingClientRect();
            
            const oX = (outerRect.left + outerRect.width / 2) - svgRect.left;
            const oY = (outerRect.top + outerRect.height / 2) - svgRect.top;

            // Generazione di curve di Bézier eleganti (curvatura a S orizzontale)
            const cpX1 = cX + (oX - cX) * 0.5;
            const cpY1 = cY;
            const cpX2 = cX + (oX - cX) * 0.5;
            const cpY2 = oY;

            const d = `M ${cX} ${cY} C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${oX} ${oY}`;

            // Creazione del tracciato SVG
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', d);
            path.setAttribute('class', 'connection-path');
            path.setAttribute('data-target-id', nodeId);
            
            // Se questo nodo è selezionato, imposta la linea come attiva
            if (currentSelectedNode === nodeId) {
                path.classList.add('active-path');
            }

            connectionsSvg.appendChild(path);

            if (animate) {
                const length = path.getTotalLength();
                path.style.strokeDasharray = length;
                path.style.strokeDashoffset = length;
                // Forza layout reflow
                path.getBoundingClientRect();
                
                // Mappa dei ritardi per allinearsi allo staggering dei nodi in CSS
                const delays = {
                    ambito: '0.4s',
                    tempo: '0.5s',
                    costi: '0.6s',
                    rischi: '0.7s',
                    issues: '0.8s',
                    msr: '0.9s'
                };
                
                path.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(0.25, 1, 0.5, 1)';
                path.style.transitionDelay = delays[nodeId] || '0s';
                path.style.strokeDashoffset = '0';
            }
        });
    }

    // Forza ridisegno su ridimensionamento finestra
    window.addEventListener('resize', drawConnections);

    // 4. Effetto Parallasse Premium su movimento mouse
    const mindmapViewport = document.getElementById('mindmap-viewport');
    mindmapViewport.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return;
        
        const rect = mindmapViewport.getBoundingClientRect();
        // Calcola l'offset relativo al centro del viewport (-0.5 a +0.5)
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        // Applica le variabili CSS per il movimento fluido in parallasse
        mindmapViewport.style.setProperty('--parallax-x', `${x * 24}px`);
        mindmapViewport.style.setProperty('--parallax-y', `${y * 24}px`);
    });

    // 5. Interazioni dei nodi (Hover e Click)
    const outerNodes = document.querySelectorAll('.node-outer');
    
    // Inizializza la posizione di ciascun nodo in base allo slot di partenza
    function initNodePositions() {
        nodeIds.forEach((id, idx) => {
            const el = document.getElementById(`node-${id}`);
            if (el) {
                el.style.left = slotPositions[idx].left;
                el.style.top = slotPositions[idx].top;
            }
        });
    }
    initNodePositions();

    // Gestione Drag and Drop & Swap dei nodi esterni
    function setupDragAndDrop() {
        const mindmapContainer = document.getElementById('mindmap-container');
        
        outerNodes.forEach(node => {
            const nodeId = node.getAttribute('data-node-id');
            
            node.addEventListener('mousedown', onMouseDown);
            node.addEventListener('touchstart', onTouchStart, { passive: false });

            function onMouseDown(e) {
                if (e.button !== 0) return; // Solo click sinistro
                if (currentSelectedNode !== null) return; // Blocca se un qualsiasi nodo è aperto
                initDrag(e.clientX, e.clientY);
                e.preventDefault();
            }

            // Supporto Touch per Mobile
            function onTouchStart(e) {
                if (currentSelectedNode !== null) return;
                const touch = e.touches[0];
                initDrag(touch.clientX, touch.clientY);
            }

            function initDrag(clientX, clientY) {
                let isDragging = false;
                const containerRect = mindmapContainer.getBoundingClientRect();
                
                let startMouseX = clientX;
                let startMouseY = clientY;
                let curX = clientX;
                let curY = clientY;
                
                let slotIdx = currentSlots.indexOf(nodeId);
                
                let startLeftPct = parseFloat(node.style.left) || 0;
                let startTopPct = parseFloat(node.style.top) || 0;
                
                node.style.transition = 'none';
                node.classList.add('is-dragging');

                function onMove(moveEvent) {
                    if (moveEvent.touches) {
                        curX = moveEvent.touches[0].clientX;
                        curY = moveEvent.touches[0].clientY;
                        moveEvent.preventDefault();
                    } else {
                        curX = moveEvent.clientX;
                        curY = moveEvent.clientY;
                    }

                    const deltaX = curX - startMouseX;
                    const deltaY = curY - startMouseY;
                    const dist = Math.hypot(deltaX, deltaY);

                    // Imposta la soglia di trascinamento per evitare falsi positivi su click singoli
                    if (!isDragging && dist > 5) {
                        isDragging = true;
                        node.classList.add('was-dragged');
                    }

                    if (isDragging) {
                        const deltaXPct = (deltaX / containerRect.width) * 100;
                        const deltaYPct = (deltaY / containerRect.height) * 100;
                        
                        let newLeftPct = startLeftPct + deltaXPct;
                        let newTopPct = startTopPct + deltaYPct;
                        
                        // Limitatori di confini percentuali entro il viewport
                        newLeftPct = Math.max(5, Math.min(95, newLeftPct));
                        newTopPct = Math.max(5, Math.min(95, newTopPct));

                        node.style.left = `${newLeftPct}%`;
                        node.style.top = `${newTopPct}%`;

                        drawConnections();
                        checkAndSwapSlots(newLeftPct, newTopPct);
                    }
                }

                function checkAndSwapSlots(pctX, pctY) {
                    for (let j = 0; j < slotPositions.length; j++) {
                        if (j === slotIdx) continue;

                        const slotPos = slotPositions[j];
                        const sX = parseFloat(slotPos.left);
                        const sY = parseFloat(slotPos.top);

                        const distPct = Math.hypot(pctX - sX, pctY - sY);

                        // Se la distanza percentuale è inferiore al 12%, scambia di posto i nodi
                        if (distPct < 12) {
                            const targetNodeId = currentSlots[j];
                            const targetNodeEl = document.getElementById(`node-${targetNodeId}`);
                            
                            if (targetNodeEl) {
                                // Scambia nel modello di allocazione slot
                                currentSlots[slotIdx] = targetNodeId;
                                currentSlots[j] = nodeId;

                                // Sposta fluidamente il nodo target nello slot vuoto
                                const oldSlotPos = slotPositions[slotIdx];
                                targetNodeEl.style.transition = 'left 0.5s cubic-bezier(0.16, 1, 0.3, 1), top 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
                                targetNodeEl.style.left = oldSlotPos.left;
                                targetNodeEl.style.top = oldSlotPos.top;

                                setTimeout(() => {
                                    if (!targetNodeEl.classList.contains('is-dragging')) {
                                        targetNodeEl.style.transition = '';
                                    }
                                }, 500);

                                // Aggiorna le coordinate e l'indice dello slot di trascinamento corrente
                                slotIdx = j;
                                startLeftPct = sX;
                                startTopPct = sY;
                                startMouseX = curX;
                                startMouseY = curY;
                            }
                            break;
                        }
                    }
                }

                function onEnd() {
                    document.removeEventListener('mousemove', onMove);
                    document.removeEventListener('mouseup', onEnd);
                    document.removeEventListener('touchmove', onMove);
                    document.removeEventListener('touchend', onEnd);

                    node.classList.remove('is-dragging');

                    // Posiziona stabilmente il nodo nello slot corrente
                    const finalSlotPos = slotPositions[slotIdx];
                    node.style.transition = 'left 0.5s cubic-bezier(0.16, 1, 0.3, 1), top 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
                    node.style.left = finalSlotPos.left;
                    node.style.top = finalSlotPos.top;

                    // Ripristina le transizioni
                    setTimeout(() => {
                        node.style.transition = '';
                        drawConnections();
                    }, 500);
                }

                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', onEnd);
                document.addEventListener('touchmove', onMove, { passive: false });
                document.addEventListener('touchend', onEnd);
            }
        });
    }
    setupDragAndDrop();

    outerNodes.forEach(node => {
        const nodeId = node.getAttribute('data-node-id');
        
        // Hover: illumina la linea di collegamento corrispondente
        node.addEventListener('mouseenter', () => {
            if (currentSelectedNode && currentSelectedNode !== nodeId) return;
            const path = connectionsSvg.querySelector(`[data-target-id="${nodeId}"]`);
            if (path) {
                path.classList.add('active-path');
            }
        });

        node.addEventListener('mouseleave', () => {
            // Non rimuovere se il nodo è attualmente selezionato/attivo
            if (currentSelectedNode === nodeId) return;
            const path = connectionsSvg.querySelector(`[data-target-id="${nodeId}"]`);
            if (path) {
                path.classList.remove('active-path');
            }
        });

        // Click: seleziona il nodo, mostra il pannello laterale ed oscura gli altri nodi (previene se è stato trascinato)
        node.addEventListener('click', (e) => {
            if (node.classList.contains('is-expanded')) return;
            if (node.classList.contains('was-dragged')) {
                node.classList.remove('was-dragged');
                return;
            }
            openNodePanel(nodeId);
        });
    });

    // Click sul nodo centrale: apre il pannello di monitoraggio globale in modalità espansione
    const centralNodeEl = document.getElementById('node-central');
    if (centralNodeEl) {
        centralNodeEl.addEventListener('click', (e) => {
            if (centralNodeEl.classList.contains('is-expanded')) return;
            openNodePanel('monitoraggio');
        });
    }

    // 6. Apertura e Popolamento del Pannello Slide-In
    // Funzione per generare e popolare dinamicamente la vista espansa (modale) dei nodi esterni
    function populateExpandedView(nodeId) {
        const data = nodeData[nodeId];
        if (!data) return;

        const el = document.getElementById(`node-${nodeId}`);
        if (!el) return;

        const expandedContainer = el.querySelector('.expanded-view');
        if (!expandedContainer) return;

        // Prevent inner clicks from bubbling up to the outer node's click handler
        expandedContainer.addEventListener('click', (e) => e.stopPropagation());

        // Vista interattiva dedicata al pannello RISCHI
        if (nodeId === 'rischi') {
            renderRischiInteractiveView(expandedContainer, data);
            return;
        }

        // Vista interattiva dedicata al pannello ISSUES
        if (nodeId === 'issues') {
            renderIssuesInteractiveView(expandedContainer, data);
            return;
        }

        // Vista interattiva dedicata al pannello MONTHLY STATUS REVIEW
        if (nodeId === 'msr') {
            renderMSRInteractiveView(expandedContainer, data);
            return;
        }

        // Vista interattiva dedicata al pannello SCOPE
        if (nodeId === 'ambito') {
            renderScopeView(expandedContainer, data);
            return;
        }

        // Vista interattiva dedicata al pannello TIME
        if (nodeId === 'tempo') {
            renderScheduleView(expandedContainer, data);
            return;
        }

        // Vista interattiva dedicata al pannello COST
        if (nodeId === 'costi') {
            renderCostView(expandedContainer, data);
            return;
        }

        expandedContainer.innerHTML = `
            <div class="expanded-header">
                <div class="expanded-title-area">
                    <span class="expanded-icon-container">
                        ${data.icon}
                    </span>
                    <div>
                        <span class="expanded-category-tag">${data.category}</span>
                        <h2>${data.title}</h2>
                    </div>
                </div>
                <button class="central-close-btn" id="${nodeId}-close-btn" aria-label="Chiudi finestra">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            
            <div class="expanded-body">
                <p class="expanded-lead">${data.description}</p>
                
                <div class="expanded-section">
                    <h3>STATO DI AVANZAMENTO GENERALE</h3>
                    <div class="expanded-kpi-grid">
                        <div class="kpi-card">
                            <span class="kpi-value">${data.perfVal}%</span>
                            <span class="kpi-label">Performance Globale</span>
                        </div>
                        <div class="kpi-card">
                            <span class="kpi-value">${data.statusLabel}</span>
                            <span class="kpi-label">Stato Operativo</span>
                        </div>
                        <div class="kpi-card">
                            <span class="kpi-value">${data.isCritical ? 'Attenzione' : 'Ottimale'}</span>
                            <span class="kpi-label">Milestone Progetto</span>
                        </div>
                    </div>
                </div>

                <div class="expanded-section">
                    <h3>DESCRIZIONE STRATEGICA DETTAGLIATA</h3>
                    <p class="expanded-text">${data.statusText}</p>
                    <p class="expanded-text">Aliquam lorem ante, eleifend at nisl in, convallis ultrices diam. Proin vel congue nulla, sed condimentum sapien. Vestibulum ut dolor feugiat, laoreet lectus quis, aliquet ipsum. In varius turpis a justo gravida, a pulvinar dui mollis.</p>
                </div>

                <div class="expanded-section">
                    <h3>ATTIVITÀ CHIAVE ATTIVE</h3>
                    <ul class="expanded-activities">
                        ${data.activities.map(act => `<li><span class="bullet">→</span> <div>${act}</div></li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="expanded-footer">
                <button class="expanded-action-btn" id="${nodeId}-action-btn">Esporta Report Direzionale .PDF</button>
            </div>
        `;

        // Registra l'evento sul pulsante di chiusura della modale
        const closeBtn = document.getElementById(`${nodeId}-close-btn`);
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeNodePanel();
            });
        }

        // Registra l'evento sul pulsante d'azione
        const actionBtn = document.getElementById(`${nodeId}-action-btn`);
        if (actionBtn) {
            actionBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                actionBtn.textContent = 'Generazione in corso...';
                actionBtn.style.opacity = '0.7';
                actionBtn.disabled = true;

                setTimeout(() => {
                    alert(`Esportazione PDF completata per la sezione: ${data.title}.\nIl report direzionale è pronto per il download.`);
                    actionBtn.textContent = 'Esporta Report Direzionale .PDF';
                    actionBtn.style.opacity = '1';
                    actionBtn.disabled = false;
                }, 1500);
            });
        }
    }

    // Vista interattiva dedicata al modulo RISCHI
    function renderRischiInteractiveView(container, data) {
        container.innerHTML = `
            <div class="expanded-header">
                <div class="expanded-title-area">
                    <span class="expanded-icon-container">${data.icon}</span>
                    <div>
                        <span class="expanded-category-tag">${data.category}</span>
                        <h2>${data.title}</h2>
                    </div>
                </div>
                <button class="central-close-btn" id="rischi-close-btn" aria-label="Chiudi finestra">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div class="expanded-body">
                <div class="rischi-reveal rischi-lead">
                    <p class="rischi-narrative">La <span class="rischi-highlight">gestione del rischio</span> è fondamentale per fare in modo che il progetto avanzi senza intoppi, o quanto meno per ridurne gli impatti quando questi si manifestano. I rischi possono essere di diversa natura: <strong>ritardi</strong>, <strong>aumento dei costi</strong>, <strong>problemi con le risorse</strong>.</p>
                    <p class="rischi-narrative">È quasi impossibile anticipare tutti i casi che si possono incontrare. Proprio per questo motivo, la gestione del rischio non è un'attività che si esaurisce all'inizio: <strong>avviene sia nella fase iniziale di un progetto sia durante il suo corso</strong>.</p>
                </div>

                <div class="rischi-reveal expanded-section">
                    <h3 class="rischi-section-title">Le tre nature del rischio</h3>
                    <div class="risk-type-badges">
                        <span class="risk-badge" data-risk-type="ritardi">⏱️ Ritardi</span>
                        <span class="risk-badge" data-risk-type="costi">💰 Aumento Costi</span>
                        <span class="risk-badge" data-risk-type="risorse">👥 Problemi Risorse</span>
                    </div>
                </div>

                <div class="rischi-reveal expanded-section">
                    <h3 class="rischi-section-title">L'individuazione iniziale</h3>
                    <p class="rischi-narrative">Inizialmente è necessario <span class="rischi-highlight">individuare tutti i possibili rischi e le loro cause</span>. Non è un'attività scontata: l'esperienza maturata col tempo può aiutare a capire cosa potrebbe succedere. Anche il contatto diretto con i team leader e gli stakeholder è essenziale per portare alla luce rischi che da soli non si riuscirebbe a vedere.</p>
                    <p class="rischi-narrative">Da questa analisi nasce il documento chiave dell'intero modulo: il <strong>Risk Register</strong>.</p>
                </div>

                <div class="rischi-reveal expanded-section">
                    <h3 class="rischi-section-title">Il Risk Register</h3>
                    <p class="rischi-narrative">Il Risk Register è un documento in cui si elencano tutti i rischi individuati. Per ognuno si assegnano <strong>cinque attributi chiave</strong>, che ne definiscono il profilo e guidano la risposta del Manager:</p>
                    <p class="rischi-narrative"><strong>1. La probabilità</strong> con cui possono presentarsi (espressa in percentuale, con un codice colore, con un valore numerico, oppure con le classiche tre fasce <em>alta, media, bassa</em>).</p>
                    <p class="rischi-narrative"><strong>2. L'impatto</strong> che potrebbero avere, anch'esso espresso come valore numerico o come descrizione qualitativa.</p>
                    <p class="rischi-narrative"><strong>3. L'importo economico</strong> associato, ossia il costo che si materializzerebbe nel caso il rischio si concretizzasse.</p>
                    <p class="rischi-narrative"><strong>4. Il ritardo temporale</strong> associato (lo slittamento previsto sulla timeline).</p>
                    <p class="rischi-narrative"><strong>5. Un Piano B</strong>, ovvero un'azione correttiva definita a priori da poter attivare rapidamente.</p>

                    <button type="button" class="risk-register-trigger" data-rr-trigger aria-expanded="false" aria-controls="rr-table-panel">
                        <span class="risk-register-trigger-icon">📋</span>
                        <span class="risk-register-trigger-text">
                            <strong>Apri un esempio di Risk Register</strong>
                            <p>Visualizza un documento compilato realmente: 6 rischi di un progetto IT con probabilità, impatto, importo, ritardo e piano B.</p>
                        </span>
                        <span class="risk-register-trigger-chevron">▶</span>
                    </button>

                    <div class="risk-register-table-wrapper" id="rr-table-panel" data-rr-panel role="region" aria-label="Esempio Risk Register">
                        <div class="risk-register-scroll">
                            <table class="risk-register-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Rischio</th>
                                        <th>Probabilità</th>
                                        <th>Impatto</th>
                                        <th>Importo</th>
                                        <th>Ritardo</th>
                                        <th>Piano B</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="ID" class="rr-id">R01</td>
                                        <td data-label="Rischio" class="rr-name">Ritardo fornitore cloud</td>
                                        <td data-label="Probabilità"><span class="rr-tag rr-tag-high">Alta</span></td>
                                        <td data-label="Impatto"><span class="rr-tag rr-tag-high">Alto</span></td>
                                        <td data-label="Importo" class="rr-amount">€ 18.000</td>
                                        <td data-label="Ritardo" class="rr-delay">+12 gg</td>
                                        <td data-label="Piano B" class="rr-plan">Provider alternativo già qualificato in shortlist con SLA equivalente.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="ID" class="rr-id">R02</td>
                                        <td data-label="Rischio" class="rr-name">Indisponibilità dev senior</td>
                                        <td data-label="Probabilità"><span class="rr-tag rr-tag-medium">Media</span></td>
                                        <td data-label="Impatto"><span class="rr-tag rr-tag-medium">Medio</span></td>
                                        <td data-label="Importo" class="rr-amount">€ 9.500</td>
                                        <td data-label="Ritardo" class="rr-delay">+7 gg</td>
                                        <td data-label="Piano B" class="rr-plan">Pair programming attivo + onboarding accelerato di un junior backup.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="ID" class="rr-id">R03</td>
                                        <td data-label="Rischio" class="rr-name">Cambio requisiti normativi</td>
                                        <td data-label="Probabilità"><span class="rr-tag rr-tag-low">Bassa</span></td>
                                        <td data-label="Impatto"><span class="rr-tag rr-tag-high">Alto</span></td>
                                        <td data-label="Importo" class="rr-amount">€ 22.000</td>
                                        <td data-label="Ritardo" class="rr-delay">+20 gg</td>
                                        <td data-label="Piano B" class="rr-plan">Audit legale trimestrale preventivo e modulo conformità a plugin.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="ID" class="rr-id">R04</td>
                                        <td data-label="Rischio" class="rr-name">Sforamento budget licenze SaaS</td>
                                        <td data-label="Probabilità"><span class="rr-tag rr-tag-medium">Media</span></td>
                                        <td data-label="Impatto"><span class="rr-tag rr-tag-medium">Medio</span></td>
                                        <td data-label="Importo" class="rr-amount">€ 6.200</td>
                                        <td data-label="Ritardo" class="rr-delay">0 gg</td>
                                        <td data-label="Piano B" class="rr-plan">Negoziazione contratti enterprise multi-anno e consolidamento vendor.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="ID" class="rr-id">R05</td>
                                        <td data-label="Rischio" class="rr-name">Bug critico in produzione</td>
                                        <td data-label="Probabilità"><span class="rr-tag rr-tag-medium">Media</span></td>
                                        <td data-label="Impatto"><span class="rr-tag rr-tag-high">Alto</span></td>
                                        <td data-label="Importo" class="rr-amount">€ 14.000</td>
                                        <td data-label="Ritardo" class="rr-delay">+5 gg</td>
                                        <td data-label="Piano B" class="rr-plan">Rollback automatico + canary release graduale su 5/25/100% del traffico.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="ID" class="rr-id">R06</td>
                                        <td data-label="Rischio" class="rr-name">Turnover di una figura chiave</td>
                                        <td data-label="Probabilità"><span class="rr-tag rr-tag-low">Bassa</span></td>
                                        <td data-label="Impatto"><span class="rr-tag rr-tag-high">Alto</span></td>
                                        <td data-label="Importo" class="rr-amount">€ 28.000</td>
                                        <td data-label="Ritardo" class="rr-delay">+18 gg</td>
                                        <td data-label="Piano B" class="rr-plan">Knowledge base obbligatoria, documentazione settimanale, mentoring incrociato.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="risk-register-legend">
                            <span><span class="rr-tag rr-tag-high">Alta</span> Critico (intervento immediato)</span>
                            <span><span class="rr-tag rr-tag-medium">Media</span> Da monitorare</span>
                            <span><span class="rr-tag rr-tag-low">Bassa</span> Sotto soglia</span>
                        </div>
                    </div>
                </div>

                <div class="rischi-reveal expanded-section">
                    <h3 class="rischi-section-title">Il Risk Budget</h3>
                    <p class="rischi-narrative">Si può anche creare un <span class="rischi-highlight">Risk Budget (RB)</span> da utilizzare in caso di necessità, per correggere o tamponare le eventualità che si presentano. Solitamente il RB non è un fondo comune per ogni rischio, ma è <strong>suddiviso nelle varie voci del Risk Register</strong>.</p>
                    <p class="rischi-narrative">Non bisogna mai usare l'importo stanziato per un rischio per correggerne un altro: in futuro questo comportamento potrebbe portare a fraintendimenti con gli stakeholder, e minare la fiducia costruita.</p>
                    <p class="rischi-narrative">È importante usare il RB <strong>proattivamente</strong>, per ridurre la probabilità che il problema si presenti, non appena si notano i segnali premonitori. Agire subito permette di utilizzare una percentuale minore del RB rispetto a quando il problema è ormai evidente. È compito del Manager decidere quando e come intervenire.</p>
                </div>

                <div class="rischi-reveal expanded-section">
                    <h3 class="rischi-section-title">Durante lo svolgimento del progetto</h3>
                    <p class="rischi-narrative">È consigliato uno <span class="rischi-highlight">status meeting ogni fine settimana</span> con i team leader, per eseguire una review del Risk Register. Serve a monitorare se il progetto sta procedendo come ipotizzato inizialmente, se i segnali premonitori si stanno concretizzando, e se le azioni correttive intraprese in passato stanno ponendo rimedio al problema.</p>
                    <p class="rischi-narrative">Il Risk Register è un documento <strong>vivo</strong>: alcune voci possono essere aggiunte man mano che si individuano nuovi rischi, oppure vecchie voci possono essere modificate. Eliminarle è invece sconsigliato: meglio essere conservativi.</p>
                    <p class="rischi-narrative"><strong>N.B.</strong> È probabile che la maggior parte dei rischi si concretizzi proprio nella fase finale di un progetto. Per questo è importante tenere informati gli stakeholder di queste evoluzioni, idealmente con una <strong>Monthly Status Review</strong>.</p>
                </div>

                <div class="rischi-reveal expanded-section">
                    <h3 class="rischi-section-title">Il confine con lo scope creep</h3>
                    <p class="rischi-narrative">Non utilizzare il Risk Budget per coprire nuove attività aggiunte allo scope (lo <strong>scope creep</strong>): in caso emergano dei problemi in seguito, non avresti più un paracadute da poter utilizzare.</p>
                    <p class="rischi-narrative">Piuttosto, quando il cliente richiede queste aggiunte, è possibile ridiscutere le attività precedenti e rivedere anche il RB. Questo approccio protegge il team di lavoro e il progetto, e aiuta anche il cliente ad avere più fiducia.</p>
                </div>

                <div class="rischi-reveal">
                    <div class="rischi-quote">
                        <strong>ALWAYS THE TRUTH.</strong><br>
                        Trasparenza totale con il cliente: comunicare onestamente cambi, ridiscussioni e ricalibrazioni del budget è ciò che, alla lunga, costruisce fiducia.
                    </div>
                </div>
            </div>
        `;

        // Chiusura
        const closeBtn = document.getElementById('rischi-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeNodePanel();
            });
        }

        // Toggle del Risk Register espandibile
        const rrTrigger = container.querySelector('[data-rr-trigger]');
        const rrPanel = container.querySelector('[data-rr-panel]');
        if (rrTrigger && rrPanel) {
            rrTrigger.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = rrTrigger.classList.toggle('is-open');
                rrPanel.classList.toggle('is-open', isOpen);
                rrTrigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

                if (isOpen) {
                    // Scroll dolce dentro il modulo per portare la tabella in vista
                    setTimeout(() => {
                        const scrollRoot = container.querySelector('.expanded-body');
                        if (scrollRoot) {
                            const targetTop = rrTrigger.offsetTop - 20;
                            scrollRoot.scrollTo({ top: targetTop, behavior: 'smooth' });
                        }
                    }, 250);
                }
            });
        }

        // Feedback visivo sui badge tipologia
        container.querySelectorAll('.risk-badge').forEach(badge => {
            badge.addEventListener('click', (e) => {
                e.stopPropagation();
                badge.style.transition = 'transform 0.2s ease';
                badge.style.transform = 'translateY(-6px) scale(1.1)';
                setTimeout(() => {
                    badge.style.transform = '';
                }, 220);
            });
        });

        // Animazioni di reveal allo scroll (IntersectionObserver)
        const scrollRoot = container.querySelector('.expanded-body');
        const revealEls = container.querySelectorAll('.rischi-reveal');

        if (scrollRoot && 'IntersectionObserver' in window) {
            const io = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        io.unobserve(entry.target);
                    }
                });
            }, {
                root: scrollRoot,
                threshold: 0.15,
                rootMargin: '0px 0px -8% 0px'
            });

            // Avvia l'osservazione subito dopo che la modale è effettivamente visibile
            // (l'expanded-view ha visibility:hidden finché il nodo non è .is-expanded)
            setTimeout(() => {
                revealEls.forEach(el => io.observe(el));
            }, 350);
        } else {
            // Fallback: rendi tutto visibile immediatamente
            revealEls.forEach(el => el.classList.add('is-visible'));
        }
    }

    // Vista interattiva dedicata al modulo ISSUES
    function renderIssuesInteractiveView(container, data) {
        container.innerHTML = `
            <div class="expanded-header">
                <div class="expanded-title-area">
                    <span class="expanded-icon-container">${data.icon}</span>
                    <div>
                        <span class="expanded-category-tag">${data.category}</span>
                        <h2>${data.title}</h2>
                    </div>
                </div>
                <button class="central-close-btn" id="issues-close-btn" aria-label="Chiudi finestra">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div class="expanded-body">
                <div class="rischi-reveal rischi-lead">
                    <p class="rischi-narrative">Nel momento in cui i <span class="rischi-highlight">segnali premonitori</span> diventano evidenti o il rischio si trasforma in un problema reale, entra in gioco un protocollo operativo composto da quattro azioni precise. Saltarne anche solo una significa rischiare di ripetere lo stesso errore.</p>
                </div>

                <div class="rischi-reveal expanded-section">
                    <h3 class="rischi-section-title">Il protocollo in 4 passi</h3>
                    <p class="rischi-narrative">Ogni issue va affrontata seguendo una sequenza chiara.</p>
                    <div class="issue-flow">
                        <div class="issue-step" data-step="1" tabindex="0">
                            <div class="issue-step-number">01</div>
                            <div class="issue-step-icon">🔍</div>
                            <h4>Indaga</h4>
                            <p>Scopri cosa sta succedendo nel dettaglio. Non basarti su impressioni: vai a fondo nei fatti.</p>
                        </div>
                        <div class="issue-step" data-step="2" tabindex="0">
                            <div class="issue-step-number">02</div>
                            <div class="issue-step-icon">📣</div>
                            <h4>Comunica</h4>
                            <p>Informa chi può attivamente aiutare e agire sul problema, inclusi gli stakeholder.</p>
                        </div>
                        <div class="issue-step" data-step="3" tabindex="0">
                            <div class="issue-step-number">03</div>
                            <div class="issue-step-icon">📊</div>
                            <h4>Raccogli i Dati</h4>
                            <p>Valuta l'impatto reale: traduci in numeri perdita economica, ritardo e danno d'immagine.</p>
                        </div>
                        <div class="issue-step" data-step="4" tabindex="0">
                            <div class="issue-step-number">04</div>
                            <div class="issue-step-icon">🧠</div>
                            <h4>Comprendi i Driver</h4>
                            <p>Analizza cosa ha portato all'evento e come prevenirlo o gestirlo meglio in futuro.</p>
                        </div>
                    </div>
                    <div class="rischi-quote">
                        <strong>Lesson Learned.</strong><br>
                        Bisogna sempre portare a casa una lezione da questa esperienza: ogni issue chiusa è un asset di conoscenza per il progetto e per quelli che verranno.
                    </div>
                </div>
            </div>
        `;

        // Chiusura
        const closeBtn = document.getElementById('issues-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeNodePanel();
            });
        }

        // Step del protocollo: highlight attivo al click
        const steps = container.querySelectorAll('.issue-step');
        steps.forEach(step => {
            step.addEventListener('click', (e) => {
                e.stopPropagation();
                steps.forEach(s => s.classList.remove('is-active'));
                step.classList.add('is-active');
            });
            step.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    steps.forEach(s => s.classList.remove('is-active'));
                    step.classList.add('is-active');
                }
            });
        });

        // Reveal allo scroll (IntersectionObserver)
        setupRevealObserver(container);
    }

    // Vista interattiva dedicata al modulo MONTHLY STATUS REVIEW
    function renderMSRInteractiveView(container, data) {
        container.innerHTML = `
            <div class="expanded-header">
                <div class="expanded-title-area">
                    <span class="expanded-icon-container">${data.icon}</span>
                    <div>
                        <span class="expanded-category-tag">${data.category}</span>
                        <h2>${data.title}</h2>
                    </div>
                </div>
                <button class="central-close-btn" id="msr-close-btn" aria-label="Chiudi finestra">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div class="expanded-body">
                <div class="rischi-reveal rischi-lead">
                    <p class="rischi-narrative">La <span class="rischi-highlight">Monthly Status Review</span> (o <em>monthly project review</em>) è una riunione periodica con tutti gli stakeholder e i team leader.</p>
                    <p class="rischi-narrative">Serve ad <strong>aggiornare tutti gli interessati</strong> sull'andamento del progetto, a identificare i problemi e a trovare soluzioni in modo congiunto.</p>
                </div>

                <div class="rischi-reveal expanded-section">
                    <h3 class="rischi-section-title">La cadenza giusta</h3>
                    <p class="rischi-narrative">Solitamente la project review ha cadenza <strong>mensile</strong>, ma per progetti critici può avvenire una volta ogni due settimane o addirittura con frequenza settimanale. Seleziona qui sotto la cadenza per leggere quando applicarla.</p>

                    <div class="msr-frequency-selector" role="tablist" aria-label="Frequenza Monthly Review">
                        <button type="button" class="msr-freq-btn is-active" data-freq="monthly" role="tab" aria-selected="true">🗓️ Mensile</button>
                        <button type="button" class="msr-freq-btn" data-freq="biweekly" role="tab" aria-selected="false">📆 Bisettimanale</button>
                        <button type="button" class="msr-freq-btn" data-freq="weekly" role="tab" aria-selected="false">⚡ Settimanale</button>
                    </div>
                    <div class="msr-freq-desc" id="msr-freq-desc">
                        <strong>Mensile</strong> — la cadenza standard. Per la maggior parte dei progetti un quadro generale ogni mese è sufficiente a tenere tutti allineati, senza appesantire l'agenda dei team leader.
                    </div>
                </div>

                <div class="rischi-reveal expanded-section">
                    <h3 class="rischi-section-title">Durante il meeting: i 5 ambiti</h3>
                    <p class="rischi-narrative">Durante ogni review si scorrono rapidamente cinque ambiti chiave. Clicca su ciascuna voce per spuntarla.</p>

                    <div class="msr-checklist">
                        <div class="msr-check-item" data-msr-item="scope" tabindex="0" role="button" aria-pressed="false">
                            <span class="msr-check-icon">📐</span>
                            <strong>Scope</strong>
                            <p>Confini operativi e deliverable</p>
                        </div>
                        <div class="msr-check-item" data-msr-item="schedule" tabindex="0" role="button" aria-pressed="false">
                            <span class="msr-check-icon">⏱️</span>
                            <strong>Schedule</strong>
                            <p>Tempi e milestone</p>
                        </div>
                        <div class="msr-check-item" data-msr-item="cost" tabindex="0" role="button" aria-pressed="false">
                            <span class="msr-check-icon">💰</span>
                            <strong>Cost</strong>
                            <p>Budget e spese effettive</p>
                        </div>
                        <div class="msr-check-item" data-msr-item="risks" tabindex="0" role="button" aria-pressed="false">
                            <span class="msr-check-icon">⚠️</span>
                            <strong>Risks</strong>
                            <p>Rischi attivi e nuovi</p>
                        </div>
                        <div class="msr-check-item" data-msr-item="issues" tabindex="0" role="button" aria-pressed="false">
                            <span class="msr-check-icon">🔧</span>
                            <strong>Issues</strong>
                            <p>Problemi materializzati</p>
                        </div>
                    </div>
                </div>

                <div class="rischi-reveal expanded-section">
                    <h3 class="rischi-section-title">Il verbale di una pagina</h3>
                    <p class="rischi-narrative">Al termine della review si condivide un <strong>verbale di massimo una pagina</strong> con quanto discusso. Il report deve essere breve, contenere le attività principali e presentare i dati ridotti all'osso.</p>
                    <p class="rischi-narrative">Un report troppo lungo rischia di non far focalizzare gli stakeholder sulle reali problematiche.</p>

                    <div class="msr-report-mockup" aria-hidden="true">
                        <div class="msr-report-header">
                            <div class="msr-report-badge">Verbale MSR</div>
                            <div class="msr-report-meta">Project Review · 1 pagina</div>
                        </div>
                        <div class="msr-report-body">
                            <div class="msr-report-row"><span>Stato Progetto</span><strong>In linea con baseline</strong></div>
                            <div class="msr-report-row"><span>Issues principali</span><strong>3 attive · 2 chiuse</strong></div>
                            <div class="msr-report-row"><span>Decisioni</span><strong>2 approvate</strong></div>
                            <div class="msr-report-row"><span>Prossimi step</span><strong>Sprint 14 → release 1.4</strong></div>
                        </div>
                        <div class="msr-report-footer">Brief · focalizzato · dati essenziali</div>
                    </div>
                </div>

                <div class="rischi-reveal expanded-section">
                    <h3 class="rischi-section-title">Le regole d'oro del verbale</h3>
                    <p class="rischi-narrative">Un buon report fa la differenza tra una review che produce decisioni e una che si disperde. Confronta i due approcci:</p>
                    <div class="msr-do-dont">
                        <div class="msr-do-card">
                            <div class="msr-do-dont-header">
                                <span class="msr-do-icon">✅</span>
                                <strong>Cosa fare</strong>
                            </div>
                            <ul>
                                <li><span>Massimo 1 pagina</span></li>
                                <li><span>Dati ridotti all'osso</span></li>
                                <li><span>Solo attività principali</span></li>
                                <li><span>Focus sulle problematiche reali</span></li>
                                <li><span>Linguaggio diretto e leggibile</span></li>
                            </ul>
                        </div>
                        <div class="msr-dont-card">
                            <div class="msr-do-dont-header">
                                <span class="msr-dont-icon">❌</span>
                                <strong>Cosa evitare</strong>
                            </div>
                            <ul>
                                <li><span>Report lunghi e prolissi</span></li>
                                <li><span>Dati ridondanti o irrilevanti</span></li>
                                <li><span>Dettagli tecnici fuori contesto</span></li>
                                <li><span>Disperdere l'attenzione</span></li>
                                <li><span>Gergo che esclude gli stakeholder</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Chiusura
        const closeBtn = document.getElementById('msr-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeNodePanel();
            });
        }

        // Selettore frequenza
        const freqBtns = container.querySelectorAll('.msr-freq-btn');
        const freqDesc = container.querySelector('#msr-freq-desc');
        const freqDescriptions = {
            monthly: `<strong>Mensile</strong> — la cadenza standard. Per la maggior parte dei progetti un quadro generale ogni mese è sufficiente a tenere tutti allineati, senza appesantire l'agenda dei team leader.`,
            biweekly: `<strong>Bisettimanale</strong> — per progetti critici. La frequenza si dimezza quando complessità o rischio aumentano, garantendo maggior visibilità su issue e milestone.`,
            weekly: `<strong>Settimanale</strong> — per progetti ad altissima criticità. Allineamento continuo: ogni settimana si rivedono scope, schedule, cost, risks e issues per agire prima che la situazione degeneri.`
        };
        freqBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                freqBtns.forEach(b => {
                    b.classList.remove('is-active');
                    b.setAttribute('aria-selected', 'false');
                });
                btn.classList.add('is-active');
                btn.setAttribute('aria-selected', 'true');
                const freq = btn.getAttribute('data-freq');
                if (freqDesc && freqDescriptions[freq]) {
                    freqDesc.style.opacity = '0';
                    setTimeout(() => {
                        freqDesc.innerHTML = freqDescriptions[freq];
                        freqDesc.style.opacity = '1';
                    }, 180);
                }
            });
        });

        // Checklist interattiva
        const checkItems = container.querySelectorAll('.msr-check-item');

        const toggleCheck = (item) => {
            const checked = item.classList.toggle('is-checked');
            item.setAttribute('aria-pressed', checked ? 'true' : 'false');
        };

        checkItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleCheck(item);
            });
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCheck(item);
                }
            });
        });

        // Reveal allo scroll
        setupRevealObserver(container);
    }

    // Utility condivisa: configura l'IntersectionObserver per i reveal allo scroll
    function setupRevealObserver(container) {
        const scrollRoot = container.querySelector('.expanded-body');
        const revealEls = container.querySelectorAll('.rischi-reveal');
        if (scrollRoot && 'IntersectionObserver' in window) {
            const io = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        io.unobserve(entry.target);
                    }
                });
            }, {
                root: scrollRoot,
                threshold: 0.15,
                rootMargin: '0px 0px -8% 0px'
            });
            setTimeout(() => {
                revealEls.forEach(el => io.observe(el));
            }, 350);
        } else {
            revealEls.forEach(el => el.classList.add('is-visible'));
        }
    }

    // Header riutilizzabile per le viste interattive
    function buildExpandedHeader(data, closeId) {
        const categoryTag = data.category ? `<span class="expanded-category-tag">${data.category}</span>` : '';
        return `
            <div class="expanded-header">
                <div class="expanded-title-area">
                    <span class="expanded-icon-container">${data.icon}</span>
                    <div>
                        ${categoryTag}
                        <h2>${data.title}</h2>
                    </div>
                </div>
                <button class="central-close-btn" id="${closeId}" aria-label="Chiudi finestra">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>`;
    }

    function wireCloseButton(closeId) {
        const closeBtn = document.getElementById(closeId);
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeNodePanel();
            });
        }
    }

    // Selezione singola tra card che aggiornano un pannello descrittivo condiviso
    function wireSelectableCards(cards, descEl, contentMap) {
        const select = (key, el) => {
            cards.forEach(c => c.classList.remove('is-selected'));
            if (el) el.classList.add('is-selected');
            if (descEl && contentMap[key]) {
                descEl.style.opacity = '0';
                setTimeout(() => {
                    descEl.innerHTML = contentMap[key];
                    descEl.style.opacity = '1';
                }, 160);
            }
        };
        cards.forEach(c => {
            const key = c.getAttribute('data-key');
            c.addEventListener('click', (e) => { e.stopPropagation(); select(key, c); });
            c.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(key, c); }
            });
        });
    }

    // Vista interattiva: SCOPE (ambito)
    function renderScopeView(container, data) {
        container.innerHTML = `
            ${buildExpandedHeader(data, 'ambito-close-btn')}
            <div class="expanded-body">
                <div class="rischi-reveal rischi-lead">
                    <p class="rischi-narrative">La cosa più importante che un Project Manager possa fare per controllare lo scope è <span class="rischi-highlight">gestire proattivamente lo «scope creep»</span> (la deviazione dai requisiti originali) puntando a migliorare costantemente il risultato.</p>
                    <p class="rischi-narrative">La strategia vincente? <strong>Definire l'intero perimetro del progetto</strong> fin dalla fase iniziale di pianificazione.</p>
                </div>

                <div class="rischi-reveal expanded-section">
                    <h3 class="rischi-section-title">Il processo di Change Control</h3>
                    <p class="rischi-narrative">È fondamentale istituire un processo rigoroso: ogni modifica richiesta deve essere <strong>formalizzata su un apposito documento</strong> e sottoposta al Project Manager. Clicca le tre fasi per esplorarle.</p>
                    <div class="issue-flow issue-flow--3">
                        <div class="issue-step" data-step="1" tabindex="0">
                            <div class="issue-step-number">01</div>
                            <div class="issue-step-icon">🧑‍⚖️</div>
                            <h4>Change Control Board</h4>
                            <p>Convoca un meeting per valutare la modifica, includendo i rappresentanti di tutte le funzioni (core e di supporto) potenzialmente impattate.</p>
                        </div>
                        <div class="issue-step" data-step="2" tabindex="0">
                            <div class="issue-step-number">02</div>
                            <div class="issue-step-icon">🔬</div>
                            <h4>Analisi d'impatto</h4>
                            <p>Il primo meeting mappa le aree coinvolte. Chi è più vicino alla modifica completa un'analisi dettagliata, calcolando tempi e costi necessari.</p>
                        </div>
                        <div class="issue-step" data-step="3" tabindex="0">
                            <div class="issue-step-number">03</div>
                            <div class="issue-step-icon">🔁</div>
                            <h4>Iterazione del piano</h4>
                            <p>Si aggiornano requisiti, WBS (Work Breakdown Structure), diagrammi di precedenza, stime dei deliverable, diagramma di Gantt e analisi dei rischi.</p>
                        </div>
                    </div>
                </div>

            </div>
        `;

        wireCloseButton('ambito-close-btn');

        // Step del Change Control: highlight attivo al click
        const steps = container.querySelectorAll('.issue-step');
        steps.forEach(step => {
            const activate = () => { 
                steps.forEach(s => s.classList.remove('is-active')); 
                step.classList.add('is-active'); 
            };
            step.addEventListener('click', (e) => { e.stopPropagation(); activate(); });
            step.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); } });
        });

        setupRevealObserver(container);
    }

    // Vista interattiva: TIME (tempo)
    function renderScheduleView(container, data) {
        container.innerHTML = `
            ${buildExpandedHeader(data, 'tempo-close-btn')}
            <div class="expanded-body">
                <div class="rischi-reveal rischi-lead">
                    <p class="rischi-narrative">La gestione delle tempistiche inizia dall'aggiornamento dello stato di avanzamento — lo <span class="rischi-highlight">statusing</span>: assicurati di conoscere le performance reali rispetto al piano, raccogliendo i dati direttamente dai <strong>team leader</strong>.</p>
                </div>

                <div class="rischi-reveal expanded-section">
                    <h3 class="rischi-section-title">Il flusso operativo</h3>
                    <div class="mc-action-list">
                        <div class="mc-action-card" tabindex="0">
                            <div class="mc-action-num">01</div>
                            <div class="mc-action-icon">📊</div>
                            <div class="mc-action-text">
                                <h4>Statusing</h4>
                                <p>Conosci le performance reali rispetto al piano, raccogliendo i dati direttamente dai team leader.</p>
                            </div>
                        </div>
                        <div class="mc-action-card" tabindex="0">
                            <div class="mc-action-num">02</div>
                            <div class="mc-action-icon">📏</div>
                            <div class="mc-action-text">
                                <h4>Regola del monitoraggio</h4>
                                <p>Per deliverable che richiedono più di 2 settimane, monitora l'avanzamento a livello di <em>work package</em>.</p>
                            </div>
                        </div>
                        <div class="mc-action-card" tabindex="0">
                            <div class="mc-action-num">03</div>
                            <div class="mc-action-icon">📈</div>
                            <div class="mc-action-text">
                                <h4>Aggiornamento del Gantt</h4>
                                <p>Inserisci i dati nel tool: ricalcola il percorso critico e la data di fine stimata, confronta con la baseline e mostra quanto Risk Buffer è stato consumato.</p>
                            </div>
                        </div>
                        <div class="mc-action-card" tabindex="0">
                            <div class="mc-action-num">04</div>
                            <div class="mc-action-icon">⚖️</div>
                            <div class="mc-action-text">
                                <h4>Gestione delle criticità</h4>
                                <p>Se il buffer si esaurisce troppo in fretta e non puoi recuperare altrove, hai dati oggettivi: chiedi agli stakeholder quale vincolo è prioritario per fare i giusti trade-off e riequilibrare il piano.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        `;

        wireCloseButton('tempo-close-btn');

        container.querySelectorAll('.mc-action-card').forEach(card => {
            card.addEventListener('click', (e) => e.stopPropagation());
        });

        setupRevealObserver(container);
    }

    // Vista interattiva: COST (costi)
    function renderCostView(container, data) {
        container.innerHTML = `
            ${buildExpandedHeader(data, 'costi-close-btn')}
            <div class="expanded-body">
                <div class="rischi-reveal rischi-lead">
                    <p class="rischi-narrative">A piano approvato, <span class="rischi-highlight">non puoi gestire i costi in modo diretto</span>: tagliare stipendi, pagamenti dei contratti o la qualità rischierebbe di rendere l'intero progetto una perdita di tempo.</p>
                    <p class="rischi-narrative">Puoi gestirli efficacemente solo in modo <strong>indiretto</strong>, agendo sulle leve che li generano.</p>
                </div>

                <div class="rischi-reveal expanded-section">
                    <h3 class="rischi-section-title">Le tre leve indirette</h3>
                    <div class="cost-levers">
                        <div class="cost-lever" data-key="scope" tabindex="0" role="button" aria-label="Scope">
                            <span class="cost-lever-icon">📐</span>
                            <strong>Scope</strong>
                        </div>
                        <div class="cost-lever" data-key="schedule" tabindex="0" role="button" aria-label="Schedule">
                            <span class="cost-lever-icon">⏱️</span>
                            <strong>Schedule</strong>
                        </div>
                        <div class="cost-lever" data-key="risks" tabindex="0" role="button" aria-label="Risks">
                            <span class="cost-lever-icon">⚠️</span>
                            <strong>Risks</strong>
                        </div>
                    </div>
                    <div class="tc-desc" id="cost-desc">
                        <strong>Costi sotto controllo, indirettamente.</strong> I costi non si comandano: si governano agendo su Scope, Schedule e Risks. Seleziona una leva per scoprire come.
                    </div>
                </div>

                <div class="rischi-reveal expanded-section">
                    <h3 class="rischi-section-title">Monitoraggio Mensile Obbligatorio</h3>
                    <p class="rischi-narrative">Traccia i costi almeno <strong>una volta al mese</strong>. Verifica le spese per materiali e servizi, ma soprattutto tieni sotto controllo le ore del personale tramite i <em>timesheet</em>.</p>
                    <div class="risk-register-grid">
                        <div class="risk-register-card">
                            <span class="risk-register-icon">🧱</span>
                            <strong>Materiali</strong>
                            <p>Verifica le spese sostenute per i materiali di progetto.</p>
                        </div>
                        <div class="risk-register-card">
                            <span class="risk-register-icon">🛠️</span>
                            <strong>Servizi</strong>
                            <p>Controlla i costi di servizi esterni e forniture.</p>
                        </div>
                        <div class="risk-register-card">
                            <span class="risk-register-icon">⏲️</span>
                            <strong>Ore personale</strong>
                            <p>Tieni sotto controllo l'impegno reale tramite i timesheet.</p>
                        </div>
                    </div>
                    <div class="risk-callout risk-callout-highlight">
                        <span class="risk-callout-icon">🛡️</span>
                        <p>È l'unica vera garanzia contro l'<strong>esplosione dei costi</strong> e l'allocazione irrealistica delle risorse. Tracciare l'impegno effettivo rende le stime del team più realistiche e affidabili man mano che il progetto avanza.</p>
                    </div>
                </div>
            </div>
        `;

        wireCloseButton('costi-close-btn');

        const levers = container.querySelectorAll('.cost-lever');
        const costDesc = container.querySelector('#cost-desc');
        const costContent = {
            scope: `<span class="tc-desc-tag tc-tag-scope">📐 Scope</span><p>Identifica ogni dettaglio durante la pianificazione e chiedi ai responsabili di <strong>scomporre accuratamente le attività</strong>: è ciò che garantisce un budget preciso.</p>`,
            schedule: `<span class="tc-desc-tag tc-tag-time">⏱️ Schedule</span><p>Ogni giorno extra a calendario comporta <strong>costi aggiuntivi</strong>. Presidia costantemente il percorso critico per non allungare i tempi.</p>`,
            risks: `<span class="tc-desc-tag tc-tag-risk">⚠️ Risks</span><p>Gestisci i rischi in modo proattivo e <strong>mitigali il prima possibile</strong>, quando intervenire è ancora poco costoso.</p>`
        };
        wireSelectableCards(levers, costDesc, costContent);

        setupRevealObserver(container);
    }

    // Vista interattiva dedicata al nodo centrale MONITORAGGIO (Monitoring & Control)
    function renderMonitoraggioInteractiveView(container, data) {
        container.innerHTML = `
            <div class="expanded-header">
                <div class="expanded-title-area">
                    <span class="expanded-icon-container">${data.icon}</span>
                    <div>
                        <h2>MONITORING</h2>
                    </div>
                </div>
                <button class="central-close-btn" id="monitoraggio-close-btn" aria-label="Chiudi finestra">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div class="expanded-body">
                <div class="rischi-reveal rischi-lead">
                    <h3 class="rischi-section-title">Lo scopo del Monitoring</h3>
                    <p class="rischi-narrative">L'obiettivo principale è <span class="rischi-highlight">sapere esattamente come sta procedendo il progetto</span> e, in secondo luogo, agire per mantenere le performance il più possibile allineate al piano originale.</p>
                </div>

                <div class="rischi-reveal expanded-section">
                    <h3 class="rischi-section-title">Come si fa?</h3>
                    <p class="rischi-narrative">Sette leve operative per tenere il progetto in rotta. Passa o clicca su ciascuna per metterla a fuoco.</p>
                    <div class="mc-action-list">
                        <div class="mc-action-card" tabindex="0">
                            <div class="mc-action-num">01</div>
                            <div class="mc-action-icon">🔄</div>
                            <div class="mc-action-text">
                                <h4>Sincronizzazione settimanale</h4>
                                <p>Fai il punto su issues e rischi con i project lead in un meeting di massimo un'ora all'inizio di ogni settimana.</p>
                            </div>
                        </div>
                        <div class="mc-action-card" tabindex="0">
                            <div class="mc-action-num">02</div>
                            <div class="mc-action-icon">📐</div>
                            <div class="mc-action-text">
                                <h4>Gestisci lo Scope Creep</h4>
                                <p>Nessuna modifica allo scope senza un'analisi d'impatto completa e una decisione ponderata. Negozia sempre le attività esistenti per bilanciare l'ingresso di nuovo lavoro.</p>
                            </div>
                        </div>
                        <div class="mc-action-card" tabindex="0">
                            <div class="mc-action-num">03</div>
                            <div class="mc-action-icon">👥</div>
                            <div class="mc-action-text">
                                <h4>Coinvolgi gli utenti</h4>
                                <p>Fai revisionare tutti i design dagli utenti per raccogliere feedback fondamentali e individuare mancanze prima di creare i deliverable finali.</p>
                            </div>
                        </div>
                        <div class="mc-action-card" tabindex="0">
                            <div class="mc-action-num">04</div>
                            <div class="mc-action-icon">🗓️</div>
                            <div class="mc-action-text">
                                <h4>Revisione Mensile Formale</h4>
                                <p>Fai il punto ufficiale su scope, schedule, budget e rischi una volta al mese, condividendolo con gli stakeholder.</p>
                            </div>
                        </div>
                        <div class="mc-action-card" tabindex="0">
                            <div class="mc-action-num">05</div>
                            <div class="mc-action-icon">🧭</div>
                            <div class="mc-action-text">
                                <h4>Correzione di rotta</h4>
                                <p>Agisci proattivamente ogni volta che puoi per riportare le performance del progetto in linea con il piano iniziale.</p>
                            </div>
                        </div>
                        <div class="mc-action-card" tabindex="0">
                            <div class="mc-action-num">06</div>
                            <div class="mc-action-icon">🤝</div>
                            <div class="mc-action-text">
                                <h4>Coinvolgi gli Stakeholder</h4>
                                <p>Chiedi il loro supporto ogni volta che il loro intervento può rivelarsi utile.</p>
                            </div>
                        </div>
                        <div class="mc-action-card mc-action-card--link" tabindex="0" role="button" data-mc-goto-tc>
                            <div class="mc-action-num">07</div>
                            <div class="mc-action-icon">⚖️</div>
                            <div class="mc-action-text">
                                <h4>Riequilibra il Triple Constraint</h4>
                                <p>Se è impossibile riportare le performance in linea, chiedi agli stakeholder quale elemento tra scope, schedule o budget è prioritario, e fai il necessario per riequilibrare i vincoli. <em>↓ Apri il modello interattivo.</em></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="rischi-reveal expanded-section" id="tc-section">
                    <h3 class="rischi-section-title">Il Triple Constraint</h3>
                    <p class="rischi-narrative">Tempo, Costi e Ambito sono tre vincoli legati tra loro; al centro vive il Rischio. <strong>Seleziona quale vincolo è prioritario</strong> per gli stakeholder e scopri come riequilibrare gli altri due.</p>
                    <div class="tc-model">
                        <div class="tc-diagram">
                            <svg class="tc-svg" viewBox="0 0 420 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagramma interattivo del Triple Constraint">
                                <defs>
                                    <marker id="tcArrowR" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                                        <path d="M0,0 L6,3 L0,6 Z" class="tc-arrowhead"></path>
                                    </marker>
                                    <marker id="tcArrowL" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto" markerUnits="strokeWidth">
                                        <path d="M6,0 L0,3 L6,6 Z" class="tc-arrowhead"></path>
                                    </marker>
                                    <marker id="tcArrowBlack" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                                        <path d="M0,0 L6,3 L0,6 Z" class="tc-arrow-black-head"></path>
                                    </marker>
                                </defs>

                                <polygon class="tc-fill" points="210,45 55,330 365,330"></polygon>
                                <line class="tc-guide" x1="210" y1="45" x2="210" y2="330"></line>
                                <line class="tc-guide" x1="55" y1="330" x2="287.5" y2="187.5"></line>
                                <line class="tc-guide" x1="365" y1="330" x2="132.5" y2="187.5"></line>

                                <!-- Frecce di Tensione (come da immagine di riferimento) -->
                                <line class="tc-image-arrow tc-image-arrow-scope-time" x1="210" y1="322" x2="140" y2="198" marker-end="url(#tcArrowBlack)"></line>
                                <line class="tc-image-arrow tc-image-arrow-scope-cost" x1="210" y1="322" x2="280" y2="198" marker-end="url(#tcArrowBlack)"></line>
                                <line class="tc-image-arrow tc-image-arrow-time-cost" x1="142" y1="187.5" x2="278" y2="187.5" marker-start="url(#tcArrowBlack)" marker-end="url(#tcArrowBlack)"></line>
                                <line class="tc-image-arrow tc-image-arrow-time-risk" x1="142" y1="193" x2="180" y2="217" marker-end="url(#tcArrowBlack)"></line>

                                <g class="tc-constraint tc-time" data-constraint="time" tabindex="0" role="button" aria-label="Tempo - Schedule">
                                    <polygon class="tc-sector" points="210,235 210,45 55,330"></polygon>
                                    <line class="tc-hit" x1="210" y1="45" x2="55" y2="330"></line>
                                    <line class="tc-edge" x1="210" y1="45" x2="55" y2="330"></line>
                                    <g class="tc-label-group" transform="rotate(-61 118 180)">
                                        <rect class="tc-label-bg" x="73" y="158" width="90" height="32" rx="16"></rect>
                                        <text class="tc-label" x="118" y="181" text-anchor="middle">Time</text>
                                    </g>
                                </g>

                                <g class="tc-constraint tc-cost" data-constraint="cost" tabindex="0" role="button" aria-label="Costi - Budget">
                                    <polygon class="tc-sector" points="210,235 210,45 365,330"></polygon>
                                    <line class="tc-hit" x1="210" y1="45" x2="365" y2="330"></line>
                                    <line class="tc-edge" x1="210" y1="45" x2="365" y2="330"></line>
                                    <g class="tc-label-group" transform="rotate(61 302 180)">
                                        <rect class="tc-label-bg" x="257" y="158" width="90" height="32" rx="16"></rect>
                                        <text class="tc-label" x="302" y="181" text-anchor="middle">Cost</text>
                                    </g>
                                </g>

                                <g class="tc-constraint tc-scope" data-constraint="scope" tabindex="0" role="button" aria-label="Ambito - Scope">
                                    <polygon class="tc-sector" points="210,235 55,330 365,330"></polygon>
                                    <line class="tc-hit" x1="55" y1="330" x2="365" y2="330"></line>
                                    <line class="tc-edge" x1="55" y1="330" x2="365" y2="330"></line>
                                    <rect class="tc-label-bg" x="160" y="337" width="100" height="32" rx="16"></rect>
                                    <text class="tc-label" x="210" y="360" text-anchor="middle">Scope</text>
                                </g>

                                <g class="tc-constraint tc-risk" data-constraint="risk" tabindex="0" role="button" aria-label="Rischio">
                                    <line class="tc-hit" x1="140" y1="214" x2="280" y2="214"></line>
                                    <rect class="tc-risk-bg" x="170" y="181" width="80" height="28" rx="14"></rect>
                                    <text class="tc-risk-label" x="210" y="202" text-anchor="middle">Risk</text>
                                </g>
                            </svg>
                        </div>
                        <div class="tc-desc" id="tc-desc">
                            <strong>Tre vincoli, un equilibrio.</strong> Tempo, Costi e Ambito sono legati: muoverne uno costringe a muovere gli altri. Al centro, il Rischio cresce a ogni squilibrio.
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Chiusura
        const closeBtn = document.getElementById('monitoraggio-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeNodePanel();
            });
        }

        // Feedback hover/focus sulle action card (accessibilità tastiera)
        container.querySelectorAll('.mc-action-card').forEach(card => {
            card.addEventListener('click', (e) => e.stopPropagation());
        });

        // Card #07: auto-scroll ed evidenziazione del modello Triple Constraint
        const gotoTcCard = container.querySelector('[data-mc-goto-tc]');
        const tcSection = container.querySelector('#tc-section');
        const scrollRootEl = container.querySelector('.expanded-body');
        const goToTripleConstraint = () => {
            if (!tcSection) return;
            // Assicura che la sezione sia già rivelata (no fade in tardivo durante lo scroll)
            tcSection.classList.add('is-visible');
            if (scrollRootEl) {
                // Offset robusto relativo al contenitore scrollabile (a prescindere dall'offsetParent)
                const targetTop = scrollRootEl.scrollTop
                    + tcSection.getBoundingClientRect().top
                    - scrollRootEl.getBoundingClientRect().top
                    - 16;
                scrollRootEl.scrollTo({ top: targetTop, behavior: 'smooth' });
            }
            // Pulse di evidenziazione (riavviabile)
            tcSection.classList.remove('tc-highlight-pulse');
            void tcSection.offsetWidth; // forza reflow per riavviare l'animazione
            tcSection.classList.add('tc-highlight-pulse');
            setTimeout(() => tcSection.classList.remove('tc-highlight-pulse'), 1800);
        };
        if (gotoTcCard) {
            gotoTcCard.addEventListener('click', (e) => {
                e.stopPropagation();
                goToTripleConstraint();
            });
            gotoTcCard.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    goToTripleConstraint();
                }
            });
        }

        // Triple Constraint interattivo
        const tcConstraints = container.querySelectorAll('.tc-constraint');
        const tcDescEl = container.querySelector('#tc-desc');
        const tcContent = {
            time: `<span class="tc-desc-tag tc-tag-time">⏱️ Tempo · Schedule</span><p>Le tempistiche del progetto. Se il tempo è la priorità fissata dagli stakeholder, <strong>Ambito e Budget devono flettere</strong>: si riduce il perimetro o si aumenta la spesa pur di rispettare le scadenze.</p>`,
            cost: `<span class="tc-desc-tag tc-tag-cost">💰 Costi · Budget</span><p>Il budget disponibile. Se i costi sono il vincolo prioritario, <strong>Ambito e Tempi vanno adattati</strong>: meno funzionalità o più tempo, ma senza sforare la spesa.</p>`,
            scope: `<span class="tc-desc-tag tc-tag-scope">📐 Ambito · Scope</span><p>Il perimetro del progetto. Se lo scope è intoccabile, occorre <strong>concedere più Tempo o più Budget</strong> per realizzarlo per intero.</p>`,
            risk: `<span class="tc-desc-tag tc-tag-risk">⚠️ Rischio</span><p>Il rischio è la <strong>conseguenza degli squilibri</strong> tra i tre lati. Mantenere i vincoli bilanciati è il modo migliore per ridurne l'esposizione complessiva.</p>`
        };

        const selectTC = (key, el) => {
            tcConstraints.forEach(c => c.classList.remove('is-selected'));
            if (el) el.classList.add('is-selected');
            if (tcDescEl && tcContent[key]) {
                tcDescEl.style.opacity = '0';
                tcDescEl.style.transform = 'translateY(8px)';
                setTimeout(() => {
                    tcDescEl.innerHTML = tcContent[key];
                    tcDescEl.style.opacity = '1';
                    tcDescEl.style.transform = 'translateY(0)';
                }, 160);
            }
        };

        tcConstraints.forEach(c => {
            const key = c.getAttribute('data-constraint');
            c.addEventListener('click', (e) => {
                e.stopPropagation();
                selectTC(key, c);
            });
            c.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectTC(key, c);
                }
            });
        });

        // Reveal allo scroll
        setupRevealObserver(container);
    }

    // 6. Apertura e Popolamento del Pannello Modale Espanso (Wow Effect Zoom)
    function openNodePanel(nodeId) {
        currentSelectedNode = nodeId;
        
        const centralEl = document.getElementById('node-central');
        
        // Popoliamo la vista espansa: nodi esterni e nodo centrale Monitoraggio
        if (nodeId === 'monitoraggio') {
            if (centralEl) {
                const centralExpanded = centralEl.querySelector('.expanded-view');
                if (centralExpanded) renderMonitoraggioInteractiveView(centralExpanded, nodeData.monitoraggio);
            }
        } else {
            populateExpandedView(nodeId);
        }

        // Gestione classi visive sui nodi per l'effetto sfocatura e focus
        outerNodes.forEach(n => {
            const nId = n.getAttribute('data-node-id');
            n.classList.remove('selected-node');
            if (nId === nodeId) {
                n.classList.add('selected-node');
                n.classList.add('is-expanded');
                n.classList.remove('dimmed-node');
            } else {
                n.classList.add('dimmed-node');
                n.classList.remove('is-expanded');
            }
        });
        
        // Calcola la posizione del centro del nodo centrale
        if (centralEl) {
            const centralRect = centralEl.getBoundingClientRect();
            const cX = centralRect.left + centralRect.width / 2;
            const cY = centralRect.top + centralRect.height / 2;

            // Imposta le variabili di offset su ciascun nodo perimetrale non espanso
            outerNodes.forEach(node => {
                if (node.getAttribute('data-node-id') !== nodeId) {
                    const nodeRect = node.getBoundingClientRect();
                    const oX = nodeRect.left + nodeRect.width / 2;
                    const oY = nodeRect.top + nodeRect.height / 2;

                    const suckX = cX - oX;
                    const suckY = cY - oY;

                    node.style.setProperty('--suck-x', `${suckX}px`);
                    node.style.setProperty('--suck-y', `${suckY}px`);
                }
            });

            // Gestione nodo centrale
            if (nodeId === 'monitoraggio') {
                centralEl.classList.add('is-expanded');
                centralEl.classList.remove('dimmed-node');
            } else {
                centralEl.classList.remove('is-expanded');
                centralEl.classList.add('dimmed-node');
            }
        }
        
        dashboard.classList.add('central-expanded');
        dashboard.classList.remove('blurred');
        
        // Disattiva tutte le linee attive durante l'espansione del centro
        document.querySelectorAll('.connection-path').forEach(path => {
            path.classList.remove('active-path');
        });
        
        // Mostra l'overlay scuro
        sidePanel.classList.remove('open');
        panelOverlay.classList.add('active');
    }

    // 7. Chiusura del Pannello Modale Espanso (Zoom Out ed Esplosione di Ritorno)
    function closeNodePanel() {
        const lastSelectedNode = currentSelectedNode;

        if (lastSelectedNode) {
            const centralEl = document.getElementById('node-central');
            const selectedEl = (lastSelectedNode === 'monitoraggio') ? centralEl : document.getElementById(`node-${lastSelectedNode}`);
            if (selectedEl) {
                selectedEl.classList.remove('is-expanded');
            }
            dashboard.classList.remove('central-expanded');
            dashboard.classList.add('central-closing');
            
            // Pulisci lo stato di chiusura e le coordinate dopo il completamento dell'esplosione
            setTimeout(() => {
                dashboard.classList.remove('central-closing');
                outerNodes.forEach(n => {
                    n.style.removeProperty('--suck-x');
                    n.style.removeProperty('--suck-y');
                });
                
                // Rimuove la vista espansa del nodo esterno per svuotare il DOM
                if (lastSelectedNode !== 'monitoraggio' && selectedEl) {
                    const expandedContainer = selectedEl.querySelector('.expanded-view');
                    if (expandedContainer) {
                        expandedContainer.innerHTML = '';
                    }
                }
                
                // Ridisegna le linee di connessione stabili
                drawConnections();
            }, 1600); // 1.6s per far completare l'oscillazione elastica dei nodi
        }

        currentSelectedNode = null;
        
        // Ripristina l'aspetto visivo di tutti i nodi immediatamente
        outerNodes.forEach(n => {
            n.classList.remove('selected-node');
            n.classList.remove('dimmed-node');
        });
        
        const centralEl = document.getElementById('node-central');
        if (centralEl) {
            centralEl.classList.remove('dimmed-node');
            centralEl.classList.remove('selected-node');
            centralEl.classList.remove('is-expanded');
        }

        // Disattiva tutte le linee pulsanti
        document.querySelectorAll('.connection-path').forEach(path => {
            path.classList.remove('active-path');
        });

        // Nascondi pannello ed overlay
        sidePanel.classList.remove('open');
        panelOverlay.classList.remove('active');
        dashboard.classList.remove('blurred');
    }

    panelCloseBtn.addEventListener('click', closeNodePanel);
    panelOverlay.addEventListener('click', closeNodePanel);

    // Registra click sul pulsante di chiusura del nodo centrale espanso
    const centralCloseBtn = document.getElementById('central-close-btn');
    if (centralCloseBtn) {
        centralCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita la propagazione dell'evento al nodo genitore
            closeNodePanel();
        });
    }

    // Registra click sull'azione del report del nodo centrale
    const centralActionBtn = document.getElementById('central-action-btn');
    if (centralActionBtn) {
        centralActionBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            centralActionBtn.textContent = 'Generazione in corso...';
            centralActionBtn.style.opacity = '0.7';
            centralActionBtn.disabled = true;

            setTimeout(() => {
                alert(`Esportazione PDF completata per la sezione: MONITORAGGIO.\nIl report direzionale è pronto per il download.`);
                centralActionBtn.textContent = 'Esporta Report Direzionale .PDF';
                centralActionBtn.style.opacity = '1';
                centralActionBtn.disabled = false;
            }, 1500);
        });
    }

    // 8. Interazione con il simulatore di anomalie (Checkbox "Segnala anomalia critica")
    widgetToggleCritical.addEventListener('change', (e) => {
        if (!currentSelectedNode) return;
        
        const isChecked = e.target.checked;
        const originalData = nodeData[currentSelectedNode];
        
        if (isChecked) {
            // Simula una riduzione delle performance e aggiorna lo stato in "Critico"
            const criticalPerf = Math.max(originalData.perfVal - 15, 65);
            const criticalLabel = "Attenzione Richiesta";
            const criticalText = `ATTENZIONE: Rilevato scostamento operativo anomalo in area ${originalData.title}. Il Team è stato allertato e sta avviando un piano di contingenza d'urgenza.`;
            
            updateWidgetValues(criticalPerf, true, criticalLabel, criticalText);
        } else {
            // Ripristina i valori di baseline del nodo
            updateWidgetValues(originalData.perfVal, originalData.isCritical, originalData.statusLabel, originalData.statusText);
        }
    });

    // 9. Gestione Tema Chiaro/Scuro con persistenza (Default: Dark Mode)
    const savedTheme = localStorage.getItem('theme');
    
    // Applica tema salvato (di default si parte in Dark Mode, se Light rimuove la classe dall'HTML)
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // Salva la preferenza nel localStorage
        const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        
        // Ridisegna le connessioni per allineare i colori
        setTimeout(drawConnections, 100);
    });

    // Pulsante azione (Esporta report) - Simula feedback utente
    panelActionBtn.addEventListener('click', () => {
        if (!currentSelectedNode) return;
        panelActionBtn.textContent = 'Generazione in corso...';
        panelActionBtn.style.opacity = '0.7';
        panelActionBtn.disabled = true;

        setTimeout(() => {
            alert(`Esportazione PDF completata per la sezione: ${nodeData[currentSelectedNode].title}.\nIl report direzionale è pronto per il download.`);
            panelActionBtn.textContent = 'Esporta Report .PDF';
            panelActionBtn.style.opacity = '1';
            panelActionBtn.disabled = false;
        }, 1500);
    });

    // 10. Fisica e movimento dei blob fluttuanti nello sfondo con accelerazione temporanea
    const blobElements = [
        { el: document.querySelector('.blob-1'), x: 10, y: 15, vx: 0.04, vy: 0.03 },
        { el: document.querySelector('.blob-2'), x: 65, y: 45, vx: -0.03, vy: 0.04 },
        { el: document.querySelector('.blob-3'), x: 40, y: 70, vx: 0.03, vy: -0.03 },
        { el: document.querySelector('.blob-4'), x: 25, y: 30, vx: -0.04, vy: -0.02 },
        { el: document.querySelector('.blob-5'), x: 55, y: 20, vx: 0.02, vy: 0.04 }
    ];

    let speedMultiplier = 1.0;

    function updateBlobs() {
        // Rallenta gradualmente il moltiplicatore di velocità fino a 1.0 (decadimento rapido in ~0.5s)
        speedMultiplier += (1.0 - speedMultiplier) * 0.04;

        blobElements.forEach(blob => {
            if (!blob.el) return;

            // Incrementa la posizione in base alla velocità ed al moltiplicatore
            blob.x += blob.vx * speedMultiplier;
            blob.y += blob.vy * speedMultiplier;

            // Rimbalzi sui bordi dello schermo (considerando la dimensione dei blob)
            if (blob.x < -20 || blob.x > 80) {
                blob.vx *= -1;
            }
            if (blob.y < -20 || blob.y > 80) {
                blob.vy *= -1;
            }

            // Applica la trasformazione CSS translate3d per massimizzare la fluidità (GPU)
            blob.el.style.transform = `translate3d(${blob.x}vw, ${blob.y}vh, 0)`;
        });

        requestAnimationFrame(updateBlobs);
    }

    // Avvia il loop di movimento dei blob nello sfondo
    requestAnimationFrame(updateBlobs);

    // Funzione per accelerare temporaneamente il movimento dei blob su interazione
    let lastAccelerationTime = 0;
    function accelerateBlobs() {
        const now = Date.now();
        // Cooldown/throttle di 450ms per evitare spamming di frame
        if (now - lastAccelerationTime > 450) {
            speedMultiplier = 7.0; // Picco iniziale di velocità per un'accelerazione evidente
            lastAccelerationTime = now;
        }
    }

    // Registra l'acceleratore su qualsiasi click nel documento
    document.addEventListener('click', accelerateBlobs);

    // Registra l'acceleratore al passaggio del mouse sopra i tasti/nodi interattivi
    document.addEventListener('mouseover', (e) => {
        const target = e.target;
        if (
            target.closest('.node-outer') || 
            target.closest('.node-central') || 
            target.closest('.theme-toggle-btn') || 
            target.closest('.panel-close-btn') || 
            target.closest('.panel-action-btn')
        ) {
            accelerateBlobs();
        }
    });
});
