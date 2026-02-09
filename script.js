// Static ASCII art - Golden Retriever with sunglasses at MacBook
const asciiArt = `
                                                                                         ****,,,,,,,,,,,*,,,*,****
                                                                                   **,,,,,,,/**/,//*,,,,/,(//*/(**(***/#
                                                                              *,*,,,,,,,,,//(,//////.,,////////#(//(/////(/( .
                                                                   ***//*/(((((,,,,,,,,(*,/((((((///.,*///#(##/##########%%##(((((((((((%
                                                                  ****((((((,,,,,,,(((((((((((#((##//.//(%##############(((((&&&&&///*/*(//
                                                                 *,*,,##%%&,,,,,,.//(((((((&%&#%(###///(####%&&################(@&&&&&%%//
                                                              *,,,%&%%///  ,,,/(///#((((@&&(#(%%(&(#(/%%%%%%%###%&&&&&&@######## ,((//&&(/**/
                                                            ,../..#(//*,..,,,,,//////#&&&&&&&((%%%%&&(%%%%%%##@&&&&&&#(######### ,/**(&%&&&***/
                                                          ,.....&%./***..*,,,,,,,##%%&((&&&&&&&#%%%%%(%%%%((&&&&&&##&&&&##(((%##(# .(/,%%,*&&**/*
                                                        /*,...... ##//..*,,,,**##&&&/*,,((&&&&&##%&&&(#%%##(&&&&&((**(#@&&&@#%#(#(%. /*&%#@@*,*,///
                                                     *,*........%%#(*...,***,               %%%&%%%%&%%%&&%%%%%*              %###%. **,&&,,*,,**,//(*
                                                   **.........@#,##**  ...****             ,,,,. @%%%#%%%@  ,,,*             /**,     *,&&%&*(*,***,//.
                                                  ,....*......../  ., *.                         *,       ,*                        ,* ,  @,%#*,,,,,(/////,
                                                ,,*,.../.,,...../  ., *                          *,,,****,,*                         * ,  @***((#,,,/(/(////
                                             ,***......,*,......(   , *     @   @ .@  .@.       *  ##(## **.     @   @  @  .@ .(#.  * ,  @/(**(((,,((/(,,/(((
                                             ,****....*****.**..%%//  /   (#@(#@/ (@#,#@#      * (#######, *   ,(@%&@# /@#/%&,(@(   *  #@@((,*((((#,(((,,((((
                                               ***...*****.**/..&&&*  ,*   &   &   &  &      *  (%(#/(%((((# *  %   &  ,%  %   %   **  (@((((**((((((((,(((##
                                               ***....,******/....@&//  , ................, ..**(((((((((((((# * ................ / ,/((@(((((,((((((#,,(((
                                                .**..,,******,....&&//  ,,,,,......,,..,, **********(/#(((((((((. ,,,,,,,,,,,,,,,*# */@@((((((((((((((*((#
                                                  ,********,.......*@*  //(%#####(//((*,,,*******((((((((((((#%%%##(#%%%%%&&&&&&&(# */@@((((((((#/(((((#(
                                                    .*,**....*......@/  /(&%%%%(((%%%/,,,*****/(((((*(***(((((#%&###(@&%%%@@@@@&&(# #@///#((((((****(/
                                                       *...........,@/  /((&%%#(%&&&(*,,,**(//((((///******((%%&######@@@@@@@&&&&(( #@//(#/(((((**(/
                                                          .....,...,@/  ,#((((&&&&&%*,*,,##(/(,             .(#&&&(###@@@@@@@#%%%(# #@%(///*(((#/.
                                                         ......,...*@/ *,.,((/@&&&%%*,*((%%                     @@@%##@@@@@@##&##**,. @#//(///(##.
                                                        /*...,.,..@@. ,,,***,//@&%%%**%%%%%    ... /( (/(((..   @@@@@#@@@@@#####/*,*. .@&/((/////(*
                                                        /*,,.,.*@&..,,,,,,*,*,/,,@((*#%%%%%   .   ......,   ..  @@@@@%%%@@*(#####%#***   @///////#*
                                                         ,*(((@, .*,,,#%,,,,*,*,,@@&&&%%@%%#&      .. ..      @&@@@@@@@@@@*&#&&&&@#%&,*** ..@@@##,
                                                                ,,,,@&**###***,,,@ /&&%%%@##(#@ ,.... ....  %%#%@&@@@@@  @%%@&&#(((@@******
                                                              .(,,@***,,,,,*(&***,@.@@&(@#@(##%//##     ((/((%#%&%@@@@* @%@@%%%&&&&&(&@#** ,/.
                                                               %,*****%####,******% %@@@@#@(%%&//////./////((%%@&@@@@@/ &@@@@@@@####@@##@,*/
                                                             ,../**(&&&@(#,*****,**, &@@@@@##%((@@@&   @@#//%%@@@@@@*,.@@@@@@@((&@@@%%&%%,**#
                                                          *,*,../,,@@((,**%%%%%%%%%%%%  %@@@@,..*//****/**,,,,%&&&,,@@@@@@@@@@@@@@#%@@**&,*,##(
                                                         **,,....@(#(,.%#@%%%%%@%%%&%%%%#%****@@@@@@@@@@@@@@**%%%@@@@@@@@@@@@((&@@@@%@**%,*,###(
                                                       /****....,,,((,%%%%%@@@%%%@&&&&&&%%***/*/*//*****,/.&&%@%%@@@@@@@@@@@@@@@&/@@%@*/**,,#%#%%&
                                                   ((/*******..*.,,##,%%@@##&@@@@@%@@@%%#****@*///*(%%%%%%@@&&@@@@@@@#@@%&@@@@@@@@/*%@***###&%%%###%
                                                        /.****..,,,,,,,@@//@@@@@@@@@@%&%***@@%/*@@//&@@@&%@@@&@@@@@@@@@#%@@%%@@@@@**&**%&%%#@%%%%/
                                                      **/***********,,,@//@@@@@@@@@@@%**@@%///@/@&//&@@@@%%@@@@@@@@@@@@@@(%@@#%@@@/**&%%&@@@@%%%%*%%%%
                                                       ****&&&&&,********@@@@&@@@@@@@@%#%@#/@@#@@&#((@@@@@@@#@@@@@@@@@@@@@&/@#%@@@/**&@@@@&@@@@%%#%%
                                                      .***%&&@@@@&(*%*/**@@(/@@@@@@@%%@%#@@&%@@@@@@@((#@@@@@@@@%@@%@%@@@@@&(//%@#%/(#@&@@@@@@@%%%@##.
                                               .  .. *****/**(((&&&&%(////@(/@(@@@##@%@@@@@&%@@@@@@@@@%(@@&%@@@@@%@@@%%@@@@((/&%%&&&@@&&%@@@@&%#####(*.
                                           . ......./*///((###%#%%#(#%&&&#(((##@@@##@%@@@@@@@%%@@@@@@@@@%##@@%%@@%@@@@&%@@@#&&&&&@@&@@@@@@@%%%%%%%#%((,.......
                                         .......,,,//(((#(%####%#@@@@&&@@##%%%%%%@%%@&@&@@@@@@@@&@@@@@@@@&&&@@&&@@@@@@&%@@%%@@@@@@@@@@&&&&@@@&@&&%&%%%#.,,,,....
                                        ......,,,,,/(((######%%&&&%%&&&&%&&&%%%%%%&%%%&%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%&%%%&%%&%%%&&&&%%%%%%%%%%%####%##,,,,.......
                                        /           .    ... ...........,.,,,,*,*******/*///////////////*/////*///////*********,,,,,,,.......  ....    .      . ,(
                                      (,                                                   ...... .................. . .                                          (
                                      #,  . , .  . .  . .    . .  . . .  . .  . . .  . . .. . . .. . .  . . .. . .  . . .  . .  . . .  . . .  . .    . .  . .     (
                                        .                                                                                                                        ,
                                       .( . , .  . ,    .    . .  . . .  . .  . . .. . . .. . .... . .... . .. . .. . . .. . .  . . .  . . .  . .  . . .  . .  . #
                                      ,,#                                                                                                                        #,.
                                   ,,,,,# . . .  . .    .    . .  . . .  . .  . . .. . ....... . .............. . ... . .. . . .. . .  . . .  . .  . . .  . .  . #,,**
                                 ,,,,,,,#                                              .   ..................... .  .                                            %,***,*,
                           .%%%%%%&&#,,,#   . .  . .  . .    . .  . . .  . . .. . ...................,...................... . .. . .  . . .  . .  . .    . .   %**,%&&&@@&&@*
                         ,#/*#######@@@(#,                                          .................,,,,...............   .                                    %*@@%#########&@
                        /*##(#########(((*  . .  . ,  . .    . .  . . .  . ..................,,,,,*/*///@*/,,,.,................. . .. . . .  . .  . .  . . .   %(#(,############*
                      *,,,(##*########&.(*                                    . ...........,,,**//(((@@@#(//**,,............ .                                  &. ##############**
                      ,,*,((/###########%/  . .  . ,  . . .  . .. . . .................,.,,*/*(#@@@@@@@@@@@@#/*/,,................. .... . .  . .  . .  . . .  *%%###%###%#####/#**
                      ,*,,/%########@@@@@/                               .   ............,*//(@@@@@@@@@@@@@##//*,,............                                 ,@@@@@(###########**
                      **,*//#####@&&&@@@@@&   .  . , .. , .. . .  . . .................,,**/#(@@@@@@@@@@@@@#(///,,.............. ....... . .. . .. . .  . .   &&&@@@@@@@###%##%(**
                       .,*####@%@&@@@@@@@@&&%                                ...........,,**((@@@@@@@@@@@@@@@(/**,,...........  .                          %&&@@@@,#@@@@@&#####(**
                        ####%(&&&&@(**@@@@@@@@   . .  . . .. . .  . . .................,.,,*//#@@@@@@@@@@@@@(//*,,................. .. . . .. . .  . .  . ,@@@@@@@,@@@@@@@&&@&%##/
                       (#%&&@**@&@@@(*,@@&@@@@                             .  ............,,,*/((((#######(//*,,,.............                            ,@@@@@..@@@@@@@/@@&&@&@##
                       /(.(@&@*&@@@@@@@, //%#@   . .  . . .  . . .. . .. . ..................,*,,**********,,,.,................. . .. . . .. . .  . .  . *%%&(,@@@@@@@@/@@@&#&*@##
                       //,/@&@(.@@@@@@@@%  ,*                                   .    . ...........,.,.,................  . .                               **  &@@@@@@@**@@@&/*%###
.   ...........     .  #*,.%%%@&. @@#%%##%&   .  . .  . . .  . .  . . .  . . .. .......................................... . . .. . .. . .    . .  . .  . .  ##%%@%@@*. @@@@@,/##,      ................
,,************..........,/*..(##%%..(&####/                                                 . ................ . .  .                                        /#####/, (%%%#%.,//. ..........************
********,****.............     ((/#         / .  . . .. . .  . , .  . .  . . .. . .... ................................... . .  . . .. . . .. . .  , .  , .  #      ,%%##*      .............***********
****************..........%(((((((#(&*****%//                                                                                                                %@/*///((.(((((((# .........***************
,,,,*,,*,,,*,**,****** &%%%%%%%&       ./   *,     .    .      .    . .    .    .    . . .  . .  . . .  . . .. . .  . .  . . .         . .    . .  .        .%  @,       (%%%%%%%&.******,*,,,**,,,,,,,,
*******************/ %%%%%%%%(        @     ,#                                                                                                             ,      & .     .%%%%%%%%& */*///*****/*//***/
**************//* ,%%%%%%%%,        @       ,#   . .    . .  . .    . .  . .    . .  . . .  . .  . . .  . .    . .  . .  . . .  . .    . .    .    . .  .  **       %         %%%%%%%%/ ///*/******//**/
*************** %%%%%%%%%        /,      ,# ,(                                                                                                             ** /% ..... &        %%%%%%%%&.**,,,,,,,,,,,,
************** *%%%%%%%%%%%%&&&&&&&&&&&&&&&&&(                                                                                                             &&&&&&&&&&&&&&&&&&&&%%%%%%%%%%#..***/*****/**
,,,,*********/  ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.,           .......................,......,,,.,,,,,..,,.........,,,,...........,.,,,,,,,,,,,,...,           ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,  ,************
***,*******.....                                                                                                                                                                         .....,,,,,,,,,,
,,,,,,,,,,,*,**************************/                                                                                                                         ,************,***,,,,,,,,,,,,,,,,,,,,,,
`;

const asciiElement = document.getElementById('ascii-animation');

function replaceCharAt(line, index, char) {
    if (!line || index < 0 || index >= line.length || line[index] === ' ') {
        return line;
    }
    return `${line.slice(0, index)}${char}${line.slice(index + 1)}`;
}

function animateAsciiGlasses(element, art) {
    const sourceLines = art.split('\n');
    const maxCols = sourceLines.reduce((max, line) => Math.max(max, line.length), 0);
    const eyeAnchor = sourceLines.findIndex(line => line.includes('(#@(#@/ (@#,#@#'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const hoverState = {
        active: false,
        row: 0,
        col: 0
    };
    const asciiSection = element.closest('.ascii-section');

    function fitAsciiToSection() {
        if (!asciiSection) {
            return;
        }

        element.style.fontSize = '';
        let fontSize = parseFloat(window.getComputedStyle(element).fontSize) || 7;
        const availableWidth = Math.max(0, asciiSection.clientWidth - 2);

        for (let i = 0; i < 3; i++) {
            const contentWidth = element.scrollWidth;
            if (contentWidth <= availableWidth || fontSize <= 1.5) {
                break;
            }

            fontSize = Math.max(1.5, fontSize * (availableWidth / contentWidth));
            element.style.fontSize = `${fontSize}px`;
        }
    }

    if (eyeAnchor === -1 || reducedMotion) {
        element.textContent = art;
        fitAsciiToSection();
        window.addEventListener('resize', fitAsciiToSection);
        return;
    }

    const lensRows = [eyeAnchor - 1, eyeAnchor, eyeAnchor + 1, eyeAnchor + 2];
    const lensRegions = [
        { starts: [74, 73, 74, 75], ends: [89, 90, 89, 90] },
        { starts: [112, 111, 112, 113], ends: [129, 130, 129, 130] }
    ];
    const codeSnippets = [
        [
            { left: 'function', right: 'goodBoy()' },
            { left: '{', right: 'bark();}' }
        ],
        [
            { left: 'if(treats>0)', right: '{tailWag++;}' },
            { left: 'else', right: '{bark();}' }
        ]
    ];
    const codeNoise = '@#%*+=-';

    let flashUntil = 0;
    let activeSnippetIndex = -1;
    let nextCodeAt = performance.now() + 5000;
    let codePulseUntil = 0;
    const hoverChars = '@@@##%%**+=-:.~';

    function updateHoverPosition(event) {
        const rect = element.getBoundingClientRect();
        if (!rect.width || !rect.height) {
            return;
        }

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        hoverState.active = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
        if (!hoverState.active) {
            return;
        }

        hoverState.col = Math.max(0, Math.min(maxCols - 1, Math.floor((x / rect.width) * maxCols)));
        hoverState.row = Math.max(0, Math.min(sourceLines.length - 1, Math.floor((y / rect.height) * sourceLines.length)));
    }

    function applyHoverDistortion(frame, now) {
        if (!hoverState.active || !canHover) {
            return;
        }

        const radius = 8;
        const startRow = Math.max(0, hoverState.row - radius);
        const endRow = Math.min(frame.length - 1, hoverState.row + radius);

        for (let row = startRow; row <= endRow; row++) {
            const startCol = Math.max(0, hoverState.col - radius);
            const endCol = Math.min(maxCols - 1, hoverState.col + radius);

            for (let col = startCol; col <= endCol; col++) {
                const dx = col - hoverState.col;
                const dy = row - hoverState.row;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance > radius) {
                    continue;
                }

                const chance = Math.max(0.2, 0.9 - distance * 0.07);
                if (Math.random() > chance) {
                    continue;
                }

                const pulse = (Math.sin(now * 0.02 + distance * 1.7) + 1) * 0.5;
                let char = hoverChars[Math.floor(Math.random() * hoverChars.length)];
                if (distance < 2.5 && Math.random() < 0.65) {
                    char = pulse > 0.5 ? '%' : '@';
                } else if (pulse > 0.75 && Math.random() < 0.55) {
                    char = '@';
                }

                frame[row] = replaceCharAt(frame[row], col, char);
            }
        }
    }

    function applyCodeFlash(frame, now) {
        if (now >= nextCodeAt) {
            activeSnippetIndex = (activeSnippetIndex + 1) % codeSnippets.length;
            codePulseUntil = now + 1100;
            nextCodeAt = now + 5000;
        }

        if (now > codePulseUntil || activeSnippetIndex < 0) {
            return;
        }

        const snippet = codeSnippets[activeSnippetIndex];
        const snippetSource = snippet
            .map(line => `${line.left}${line.right}`)
            .join('');

        function renderInLens(rowIndex, lensIndex, text) {
            if (!text) {
                return;
            }

            const row = lensRows[rowIndex];
            if (row < 0 || row >= frame.length) {
                return;
            }

            const start = lensRegions[lensIndex].starts[rowIndex] + 1;
            const end = lensRegions[lensIndex].ends[rowIndex] - 1;
            const width = Math.max(1, end - start + 1);
            const clipped = text.length > width ? text.slice(0, width) : text;
            const left = start + Math.max(0, Math.floor((width - clipped.length) / 2));

            for (let i = 0; i < clipped.length && left + i <= end; i++) {
                const revealChar = Math.random() < 0.86 || i < 1 || i > clipped.length - 2;
                const char = revealChar
                    ? clipped[i]
                    : codeNoise[Math.floor(Math.random() * codeNoise.length)];
                frame[row] = replaceCharAt(frame[row], left + i, char);
            }
        }

        snippet.forEach((line, lineIndex) => {
            const rowIndex = 1 + lineIndex;
            renderInLens(rowIndex, 0, line.left);
            renderInLens(rowIndex, 1, line.right);
        });

        [0, 3].forEach((edgeRowIndex) => {
            const edgeRow = lensRows[edgeRowIndex];
            if (edgeRow < 0 || edgeRow >= frame.length) {
                return;
            }

            [0, 1].forEach((lensIndex) => {
                const edgeStart = lensRegions[lensIndex].starts[edgeRowIndex] + 1;
                const edgeEnd = lensRegions[lensIndex].ends[edgeRowIndex] - 1;
                const edgeWidth = Math.max(1, edgeEnd - edgeStart + 1);

                for (let i = 0; i < 4; i++) {
                    const col = edgeStart + Math.floor(Math.random() * edgeWidth);
                    const snippetChar = snippetSource[Math.floor(Math.random() * snippetSource.length)];
                    const noiseChar = codeNoise[Math.floor(Math.random() * codeNoise.length)];
                    const char = Math.random() < 0.65 ? snippetChar : noiseChar;
                    frame[edgeRow] = replaceCharAt(frame[edgeRow], col, char);
                }
            });
        });
    }

    function paintFrame(now) {
        const frame = sourceLines.slice();
        const wave = (Math.sin(now * 0.0045) + 1) * 0.5;
        if (now > flashUntil && Math.random() < 0.015) {
            flashUntil = now + 220;
        }
        const flash = now < flashUntil ? 0.5 : 0;
        const intensity = Math.min(1, 0.3 + wave * 0.45 + flash);

        lensRegions.forEach((lens, lensIndex) => {
            lensRows.forEach((row, rowIndex) => {
                if (row < 0 || row >= frame.length) {
                    return;
                }

                const start = lens.starts[rowIndex];
                const end = lens.ends[rowIndex];
                const width = Math.max(1, end - start);
                const sweep = start + Math.floor(((Math.sin(now * 0.006 + lensIndex + rowIndex * 0.8) + 1) * 0.5) * (width - 1));
                const sparkles = 1 + Math.floor(intensity * 2);

                for (let i = 0; i < sparkles; i++) {
                    const col = start + Math.floor(Math.random() * width);
                    const value = intensity + Math.random() * 0.25;
                    let char = '.';

                    if (value > 1) char = '%';
                    else if (value > 0.8) char = '@';
                    else if (value > 0.6) char = '#';
                    else if (value > 0.45) char = '*';

                    frame[row] = replaceCharAt(frame[row], col, char);
                }

                frame[row] = replaceCharAt(frame[row], sweep, '@');
                frame[row] = replaceCharAt(frame[row], sweep + 1, '#');
                if (flash > 0) {
                    frame[row] = replaceCharAt(frame[row], sweep - 1, '%');
                }
            });
        });

        applyCodeFlash(frame, now);
        applyHoverDistortion(frame, now);
        element.textContent = frame.join('\n');
    }

    let lastTick = 0;
    function loop(now) {
        if (now - lastTick > 90) {
            paintFrame(now);
            lastTick = now;
        }
        requestAnimationFrame(loop);
    }

    paintFrame(performance.now());
    fitAsciiToSection();
    requestAnimationFrame(loop);
    window.addEventListener('resize', fitAsciiToSection);

    if (canHover) {
        element.addEventListener('mousemove', updateHoverPosition);
        element.addEventListener('mouseenter', updateHoverPosition);
        element.addEventListener('mouseleave', () => {
            hoverState.active = false;
        });
    }
}

if (asciiElement) {
    animateAsciiGlasses(asciiElement, asciiArt);
}

function initBinaryBackground() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const layer = document.createElement('div');
    layer.className = 'binary-bg';
    document.body.prepend(layer);

    function syncBinaryLayerHeight() {
        const docHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            window.innerHeight
        );
        layer.style.setProperty('--binary-height', `${docHeight}px`);
    }

    syncBinaryLayerHeight();
    window.addEventListener('resize', syncBinaryLayerHeight);
    window.addEventListener('load', syncBinaryLayerHeight);

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const maxParticles = reducedMotion
        ? (isMobile ? 44 : 68)
        : (isMobile ? 72 : 110);
    const baseInterval = reducedMotion
        ? (isMobile ? 460 : 390)
        : (isMobile ? 340 : 270);
    const clusterRadius = reducedMotion
        ? (isMobile ? 6 : 7.5)
        : (isMobile ? 8 : 10);
    const clusterMin = reducedMotion
        ? (isMobile ? 6 : 8)
        : (isMobile ? 9 : 12);
    const clusterMax = reducedMotion
        ? (isMobile ? 10 : 13)
        : (isMobile ? 15 : 22);
    let activeParticles = 0;

    function spawnParticleAt(x, y, intensity = 1) {
        if (document.hidden || activeParticles >= maxParticles || x < 0 || x > 100 || y < 0 || y > 100) {
            return;
        }

        const particle = document.createElement('span');
        particle.className = 'binary-particle';
        particle.textContent = Math.random() < 0.5 ? '0' : '1';

        const duration = reducedMotion
            ? (6.2 + Math.random() * 5.5)
            : (4.6 + Math.random() * 4.2);
        const size = reducedMotion
            ? (10 + Math.random() * 8)
            : (11 + Math.random() * 11);
        const peak = reducedMotion
            ? (0.2 + Math.random() * 0.14)
            : (0.28 + Math.random() * 0.22);
        const tunedPeak = Math.max(0.14, Math.min(0.62, peak * (0.65 + intensity * 0.55)));

        particle.style.left = `${x.toFixed(2)}%`;
        particle.style.top = `${y.toFixed(2)}%`;
        particle.style.setProperty('--dur', `${duration.toFixed(2)}s`);
        particle.style.setProperty('--size', `${size.toFixed(1)}px`);
        particle.style.setProperty('--peak', tunedPeak.toFixed(2));

        activeParticles++;
        particle.addEventListener('animationend', () => {
            particle.remove();
            activeParticles = Math.max(0, activeParticles - 1);
        });

        layer.appendChild(particle);
    }

    function spawnCluster() {
        if (document.hidden || activeParticles >= maxParticles) {
            return;
        }

        const cx = 4 + Math.random() * 92;
        const cy = 4 + Math.random() * 92;
        const amount = clusterMin + Math.floor(Math.random() * (clusterMax - clusterMin + 1));

        for (let i = 0; i < amount; i++) {
            if (activeParticles >= maxParticles) {
                break;
            }

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.sqrt(Math.random()) * clusterRadius;
            const px = cx + Math.cos(angle) * distance;
            const py = cy + Math.sin(angle) * distance;
            const intensity = 1 - distance / clusterRadius;
            spawnParticleAt(px, py, intensity);
        }
    }

    for (let i = 0; i < (isMobile ? 8 : 12); i++) {
        setTimeout(spawnCluster, i * 140);
    }

    setInterval(() => {
        syncBinaryLayerHeight();
        spawnCluster();
        if (Math.random() < (reducedMotion ? 0.28 : 0.45)) {
            spawnCluster();
        }
        if (Math.random() < (reducedMotion ? 0.1 : 0.2)) {
            spawnCluster();
        }
    }, baseInterval);
}

initBinaryBackground();

// Add smooth scroll for any internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Projects carousel with card switching
const carousel = {
    track: document.querySelector('.projects-track'),
    wrapper: document.querySelector('.projects-scroll-wrapper'),
    prevBtn: document.querySelector('.carousel-prev'),
    nextBtn: document.querySelector('.carousel-next'),
    dotsContainer: document.querySelector('.carousel-dots'),
    currentIndex: 0,
    cardsPerView: 1,

    init() {
        if (!this.track) return;

        this.cards = this.track.querySelectorAll('.project-card');
        this.totalCards = this.cards.length;

        this.calculateCardsPerView();
        this.createDots();
        this.updateCarousel();
        this.bindEvents();

        window.addEventListener('resize', () => {
            this.calculateCardsPerView();
            this.createDots();
            this.updateCarousel();
        });
    },

    calculateCardsPerView() {
        const wrapperWidth = this.wrapper.offsetWidth;
        const cardWidth = 280;
        const gap = 24;
        this.cardsPerView = Math.floor((wrapperWidth + gap) / (cardWidth + gap)) || 1;
        this.maxIndex = Math.max(0, this.totalCards - this.cardsPerView);
        if (this.currentIndex > this.maxIndex) {
            this.currentIndex = this.maxIndex;
        }
    },

    createDots() {
        this.dotsContainer.innerHTML = '';
        const dotsCount = this.maxIndex + 1;

        for (let i = 0; i < dotsCount; i++) {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === this.currentIndex ? ' active' : '');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', () => this.goTo(i));
            this.dotsContainer.appendChild(dot);
        }
    },

    updateCarousel() {
        const cardWidth = 280;
        const gap = 24;
        const offset = this.currentIndex * (cardWidth + gap);
        this.track.style.transform = `translateX(-${offset}px)`;

        // Update buttons state
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex >= this.maxIndex;

        // Update dots
        const dots = this.dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentIndex);
        });
    },

    goTo(index) {
        this.currentIndex = Math.max(0, Math.min(index, this.maxIndex));
        this.updateCarousel();
    },

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
    },

    next() {
        if (this.currentIndex < this.maxIndex) {
            this.currentIndex++;
            this.updateCarousel();
        }
    },

    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });

        // Touch swipe support
        let startX = 0;
        let isDragging = false;

        this.wrapper.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        this.wrapper.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) this.next();
                else this.prev();
            }
            isDragging = false;
        });
    }
};

carousel.init();
