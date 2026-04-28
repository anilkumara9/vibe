Directory structure:
└── firecrawl-open-lovable/
    ├── README.md
    ├── colors.json
    ├── eslint.config.mjs
    ├── LICENSE
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── .env.example
    ├── .test
    ├── app/
    │   ├── globals.css
    │   ├── landing.tsx
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── api/
    │   │   ├── analyze-edit-intent/
    │   │   │   └── route.ts
    │   │   ├── apply-ai-code/
    │   │   │   └── route.ts
    │   │   ├── apply-ai-code-stream/
    │   │   │   └── route.ts
    │   │   ├── check-vite-errors/
    │   │   │   └── route.ts
    │   │   ├── clear-vite-errors-cache/
    │   │   │   └── route.ts
    │   │   ├── conversation-state/
    │   │   │   └── route.ts
    │   │   ├── create-ai-sandbox/
    │   │   │   └── route.ts
    │   │   ├── create-ai-sandbox-v2/
    │   │   │   └── route.ts
    │   │   ├── create-zip/
    │   │   │   └── route.ts
    │   │   ├── detect-and-install-packages/
    │   │   │   └── route.ts
    │   │   ├── get-sandbox-files/
    │   │   │   └── route.ts
    │   │   ├── install-packages/
    │   │   │   └── route.ts
    │   │   ├── install-packages-v2/
    │   │   │   └── route.ts
    │   │   ├── kill-sandbox/
    │   │   │   └── route.ts
    │   │   ├── monitor-vite-logs/
    │   │   │   └── route.ts
    │   │   ├── report-vite-error/
    │   │   │   └── route.ts
    │   │   ├── restart-vite/
    │   │   │   └── route.ts
    │   │   ├── run-command/
    │   │   │   └── route.ts
    │   │   ├── run-command-v2/
    │   │   │   └── route.ts
    │   │   ├── sandbox-logs/
    │   │   │   └── route.ts
    │   │   ├── sandbox-status/
    │   │   │   └── route.ts
    │   │   ├── scrape-screenshot/
    │   │   │   └── route.ts
    │   │   ├── scrape-url-enhanced/
    │   │   │   └── route.ts
    │   │   ├── scrape-website/
    │   │   │   └── route.ts
    │   │   └── search/
    │   │       └── route.ts
    │   └── builder/
    │       └── page.tsx
    ├── atoms/
    │   └── sheets.ts
    ├── components/
    │   ├── CodeApplicationProgress.tsx
    │   ├── FirecrawlIcon.tsx
    │   ├── FirecrawlLogo.tsx
    │   ├── HeroInput.tsx
    │   ├── HMRErrorDetector.tsx
    │   ├── SandboxPreview.tsx
    │   ├── app/
    │   │   ├── (home)/
    │   │   │   └── sections/
    │   │   │       ├── ai-readiness/
    │   │   │       │   ├── ControlPanel.tsx
    │   │   │       │   ├── InlineResults.tsx
    │   │   │       │   ├── MetricBars.tsx
    │   │   │       │   ├── RadarChart.tsx
    │   │   │       │   └── ScoreChart.tsx
    │   │   │       ├── endpoints/
    │   │   │       │   ├── EndpointsCrawl/
    │   │   │       │   │   └── EndpointsCrawl.tsx
    │   │   │       │   ├── EndpointsExtract/
    │   │   │       │   │   └── EndpointsExtract.tsx
    │   │   │       │   ├── EndpointsMap/
    │   │   │       │   │   └── EndpointsMap.tsx
    │   │   │       │   ├── EndpointsScrape/
    │   │   │       │   │   └── EndpointsScrape.tsx
    │   │   │       │   ├── EndpointsSearch/
    │   │   │       │   │   └── EndpointsSearch.tsx
    │   │   │       │   ├── Extract/
    │   │   │       │   │   └── Extract.tsx
    │   │   │       │   └── Mcp/
    │   │   │       │       └── Mcp.tsx
    │   │   │       ├── hero/
    │   │   │       │   ├── Hero.tsx
    │   │   │       │   ├── Background/
    │   │   │       │   │   ├── Background.tsx
    │   │   │       │   │   ├── BackgroundOuterPiece.tsx
    │   │   │       │   │   └── _svg/
    │   │   │       │   │       └── CenterStar.tsx
    │   │   │       │   ├── Badge/
    │   │   │       │   │   └── Badge.tsx
    │   │   │       │   ├── Pixi/
    │   │   │       │   │   ├── Pixi.tsx
    │   │   │       │   │   └── tickers/
    │   │   │       │   │       ├── ascii.ts
    │   │   │       │   │       └── features/
    │   │   │       │   │           ├── cell.ts
    │   │   │       │   │           ├── cellReveal.ts
    │   │   │       │   │           ├── crawl.ts
    │   │   │       │   │           ├── index.ts
    │   │   │       │   │           ├── mapping.ts
    │   │   │       │   │           ├── scrape.ts
    │   │   │       │   │           ├── search.ts
    │   │   │       │   │           └── components/
    │   │   │       │   │               ├── AnimatedRect.ts
    │   │   │       │   │               ├── BlinkingContainer.ts
    │   │   │       │   │               └── Dot.ts
    │   │   │       │   └── Title/
    │   │   │       │       └── Title.tsx
    │   │   │       ├── hero-flame/
    │   │   │       │   └── HeroFlame.tsx
    │   │   │       ├── hero-input/
    │   │   │       │   ├── HeroInput.tsx
    │   │   │       │   ├── _svg/
    │   │   │       │   │   ├── ArrowRight.tsx
    │   │   │       │   │   └── Globe.tsx
    │   │   │       │   ├── Button/
    │   │   │       │   │   └── Button.tsx
    │   │   │       │   └── Tabs/
    │   │   │       │       ├── Tabs.tsx
    │   │   │       │       └── Mobile/
    │   │   │       │           └── Mobile.tsx
    │   │   │       └── hero-scraping/
    │   │   │           ├── HeroScraping.css
    │   │   │           ├── HeroScraping.tsx
    │   │   │           ├── _svg/
    │   │   │           │   ├── BrowserMobile.tsx
    │   │   │           │   └── BrowserTab.tsx
    │   │   │           ├── Code/
    │   │   │           │   ├── Code.tsx
    │   │   │           │   └── Loading/
    │   │   │           │       ├── Loading.tsx
    │   │   │           │       └── _svg/
    │   │   │           │           └── Check.tsx
    │   │   │           └── Tag/
    │   │   │               └── Tag.tsx
    │   │   ├── generation/
    │   │   │   ├── SidebarInput.tsx
    │   │   │   └── SidebarQuickInput.tsx
    │   │   └── .cursor/
    │   │       └── rules/
    │   │           └── home-page-components.md
    │   ├── shared/
    │   │   ├── animated-dot-icon.tsx
    │   │   ├── animated-height.tsx
    │   │   ├── ascii-background.tsx
    │   │   ├── ascii-flame-background.tsx
    │   │   ├── hero-flame.tsx
    │   │   ├── lockBody.tsx
    │   │   ├── pylon.tsx
    │   │   ├── button/
    │   │   │   ├── Button.css
    │   │   │   └── Button.tsx
    │   │   ├── buttons/
    │   │   │   ├── capsule-button.tsx
    │   │   │   ├── fire-action-link.tsx
    │   │   │   ├── index.ts
    │   │   │   └── slate-button.tsx
    │   │   ├── color-styles/
    │   │   │   └── color-styles.tsx
    │   │   ├── combobox/
    │   │   │   └── combobox.tsx
    │   │   ├── effects/
    │   │   │   ├── index.ts
    │   │   │   ├── subtle-ascii-animation.tsx
    │   │   │   ├── flame/
    │   │   │   │   ├── ascii-explosion.tsx
    │   │   │   │   ├── core-flame.tsx
    │   │   │   │   ├── flame-background.tsx
    │   │   │   │   ├── Flame.tsx
    │   │   │   │   ├── hero-flame.tsx
    │   │   │   │   ├── index.ts
    │   │   │   │   ├── subtle-explosion.tsx
    │   │   │   │   ├── auth-pulse/
    │   │   │   │   │   ├── auth-pulse.tsx
    │   │   │   │   │   └── pulse-data.json
    │   │   │   │   ├── slate-grid/
    │   │   │   │   │   ├── grid-data.json
    │   │   │   │   │   └── slate-grid.tsx
    │   │   │   │   └── subtle-wave/
    │   │   │   │       ├── subtle-wave.tsx
    │   │   │   │       └── wave-data.json
    │   │   │   └── .cursor/
    │   │   │       └── rules/
    │   │   │           └── flame-effects.md
    │   │   ├── firecrawl-icon/
    │   │   │   ├── firecrawl-icon-static.tsx
    │   │   │   └── firecrawl-icon.tsx
    │   │   ├── header/
    │   │   │   ├── HeaderContext.tsx
    │   │   │   ├── _svg/
    │   │   │   │   └── Logo.tsx
    │   │   │   ├── BrandKit/
    │   │   │   │   ├── BrandKit.tsx
    │   │   │   │   └── _svg/
    │   │   │   │       ├── Download.tsx
    │   │   │   │       ├── Guidelines.tsx
    │   │   │   │       └── Icon.tsx
    │   │   │   ├── Dropdown/
    │   │   │   │   ├── Content/
    │   │   │   │   │   ├── Content.tsx
    │   │   │   │   │   └── NavItemRow.tsx
    │   │   │   │   ├── Github/
    │   │   │   │   │   ├── Github.tsx
    │   │   │   │   │   └── Flame/
    │   │   │   │   │       └── Flame.tsx
    │   │   │   │   ├── Mobile/
    │   │   │   │   │   ├── Mobile.tsx
    │   │   │   │   │   └── Item/
    │   │   │   │   │       └── Item.tsx
    │   │   │   │   ├── Stories/
    │   │   │   │   │   ├── Stories.tsx
    │   │   │   │   │   ├── _svg/
    │   │   │   │   │   │   ├── ArrowUp.tsx
    │   │   │   │   │   │   └── Replit.tsx
    │   │   │   │   │   └── Flame/
    │   │   │   │   │       └── Flame.tsx
    │   │   │   │   └── Wrapper/
    │   │   │   │       └── Wrapper.tsx
    │   │   │   ├── Github/
    │   │   │   │   ├── GithubClient.tsx
    │   │   │   │   └── _svg/
    │   │   │   │       └── GithubIcon.tsx
    │   │   │   ├── Nav/
    │   │   │   │   ├── Nav.tsx
    │   │   │   │   ├── RenderEndpointIcon.tsx
    │   │   │   │   ├── _svg/
    │   │   │   │   │   ├── Affiliate.tsx
    │   │   │   │   │   ├── Api.tsx
    │   │   │   │   │   ├── ArrowRight.tsx
    │   │   │   │   │   ├── Careers.tsx
    │   │   │   │   │   ├── Changelog.tsx
    │   │   │   │   │   ├── Chats.tsx
    │   │   │   │   │   ├── Lead.tsx
    │   │   │   │   │   ├── MCP.tsx
    │   │   │   │   │   ├── Platforms.tsx
    │   │   │   │   │   ├── Research.tsx
    │   │   │   │   │   ├── Student.tsx
    │   │   │   │   │   └── Templates.tsx
    │   │   │   │   └── Item/
    │   │   │   │       ├── Item.tsx
    │   │   │   │       └── _svg/
    │   │   │   │           └── ChevronDown.tsx
    │   │   │   ├── Toggle/
    │   │   │   │   └── Toggle.tsx
    │   │   │   └── Wrapper/
    │   │   │       └── Wrapper.tsx
    │   │   ├── icons/
    │   │   │   ├── animated-chevron.tsx
    │   │   │   ├── animated-icons.tsx
    │   │   │   ├── arrow-animated.tsx
    │   │   │   ├── check.tsx
    │   │   │   ├── chevron-slide.tsx
    │   │   │   ├── copied.tsx
    │   │   │   ├── copy.tsx
    │   │   │   ├── curve.tsx
    │   │   │   ├── fingerprint-icon.tsx
    │   │   │   ├── GitHub.tsx
    │   │   │   ├── Logo.tsx
    │   │   │   ├── openai.tsx
    │   │   │   ├── source-icon.tsx
    │   │   │   ├── symbol-colored.tsx
    │   │   │   ├── symbol-white.tsx
    │   │   │   ├── tremor-placeholder.tsx
    │   │   │   ├── wordmark-colored.tsx
    │   │   │   └── wordmark-white.tsx
    │   │   ├── image/
    │   │   │   ├── getImageSrc.ts
    │   │   │   └── Image.tsx
    │   │   ├── layout/
    │   │   │   ├── animated-height.tsx
    │   │   │   ├── animated-width.tsx
    │   │   │   ├── curvy-rect-divider.tsx
    │   │   │   └── curvy-rect.tsx
    │   │   ├── loading/
    │   │   │   ├── Shimmer.tsx
    │   │   │   └── usage-loading.tsx
    │   │   ├── logo-cloud/
    │   │   │   ├── index.ts
    │   │   │   ├── logo-cloud.tsx
    │   │   │   └── logo-cloud2/
    │   │   │       ├── Logocloud.css
    │   │   │       └── Logocloud.tsx
    │   │   ├── notifications/
    │   │   │   └── slack-notification.tsx
    │   │   ├── pixi/
    │   │   │   ├── Pixi.tsx
    │   │   │   ├── PixiAssetManager.ts
    │   │   │   └── utils.ts
    │   │   ├── Playground/
    │   │   │   └── Context/
    │   │   │       └── types.ts
    │   │   ├── portal-to-body/
    │   │   │   └── PortalToBody.tsx
    │   │   ├── preview/
    │   │   │   ├── json-error-highlighter.tsx
    │   │   │   ├── live-preview-frame.tsx
    │   │   │   ├── multiple-web-browsers.tsx
    │   │   │   └── web-browser.tsx
    │   │   ├── search-params-provider/
    │   │   │   └── search-params-provider.tsx
    │   │   ├── section-head/
    │   │   │   ├── SectionHead.css
    │   │   │   └── SectionHead.tsx
    │   │   ├── section-title/
    │   │   │   └── SectionTitle.tsx
    │   │   ├── tabs/
    │   │   │   └── Tabs.tsx
    │   │   ├── ui/
    │   │   │   ├── app-dialog.tsx
    │   │   │   ├── ascii-dot-loader.tsx
    │   │   │   ├── dot-grid-loader.tsx
    │   │   │   ├── empty-state.tsx
    │   │   │   ├── index.ts
    │   │   │   ├── loading-state.tsx
    │   │   │   ├── mobile-sheet.tsx
    │   │   │   └── stat-card.tsx
    │   │   └── utils/
    │   │       └── portal-to-body.tsx
    │   └── ui/
    │       ├── button.tsx
    │       ├── checkbox.tsx
    │       ├── code.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── select.tsx
    │       ├── spinner.tsx
    │       ├── textarea.tsx
    │       ├── motion/
    │       │   └── scramble-text.tsx
    │       └── shadcn/
    │           ├── accordion.tsx
    │           ├── alert-dialog.tsx
    │           ├── badge.tsx
    │           ├── button.css
    │           ├── button.tsx
    │           ├── card.tsx
    │           ├── checkbox.tsx
    │           ├── collapsible.tsx
    │           ├── combobox.tsx
    │           ├── context-menu.tsx
    │           ├── data-table.tsx
    │           ├── dialog.tsx
    │           ├── dropdown-menu.tsx
    │           ├── form.tsx
    │           ├── input.tsx
    │           ├── label.tsx
    │           ├── navigation-menu.tsx
    │           ├── popover.tsx
    │           ├── progress.tsx
    │           ├── scroll-area.tsx
    │           ├── select.tsx
    │           ├── separator.tsx
    │           ├── sheet.tsx
    │           ├── slider.tsx
    │           ├── switch.tsx
    │           ├── tabs.tsx
    │           ├── textarea.tsx
    │           ├── toast.tsx
    │           ├── toggle.tsx
    │           ├── tooltip-radix.tsx
    │           └── tooltip.tsx
    ├── config/
    │   └── app.config.ts
    ├── docs/
    │   ├── PACKAGE_DETECTION_GUIDE.md
    │   ├── STREAMING_FIXES_SUMMARY.md
    │   ├── TOOL_CALL_FIX_SUMMARY.md
    │   └── UI_FEEDBACK_DEMO.md
    ├── hooks/
    │   ├── useDebouncedCallback.ts
    │   ├── useDebouncedEffect.ts
    │   └── useSwitchingCode.ts
    ├── lib/
    │   ├── context-selector.ts
    │   ├── edit-examples.ts
    │   ├── edit-intent-analyzer.ts
    │   ├── file-parser.ts
    │   ├── file-search-executor.ts
    │   ├── icons.ts
    │   ├── utils.ts
    │   └── sandbox/
    │       ├── factory.ts
    │       ├── sandbox-manager.ts
    │       ├── types.ts
    │       └── providers/
    │           ├── e2b-provider.ts
    │           └── vercel-provider.ts
    ├── packages/
    │   └── create-open-lovable/
    │       ├── index.js
    │       ├── package.json
    │       ├── lib/
    │       │   ├── installer.js
    │       │   └── prompts.js
    │       └── templates/
    │           ├── e2b/
    │           │   ├── README.md
    │           │   └── .env.example
    │           └── vercel/
    │               ├── README.md
    │               └── .env.example
    ├── public/
    │   ├── compressor.json
    │   └── firecrawl-logo
    ├── styles/
    │   ├── chrome-bug.css
    │   ├── colors.json
    │   ├── fire.css
    │   ├── inside-border-fix.css
    │   ├── main.css
    │   ├── additional-styles/
    │   │   ├── custom-fonts.css
    │   │   ├── theme.css
    │   │   └── utility-patterns.css
    │   ├── components/
    │   │   ├── button.css
    │   │   ├── code.css
    │   │   ├── index.css
    │   │   └── .cursor/
    │   │       └── rules/
    │   │           └── component-styles.md
    │   └── design-system/
    │       ├── animations.css
    │       ├── colors.css
    │       ├── fonts.css
    │       ├── typography.css
    │       ├── utilities.css
    │       ├── base/
    │       │   ├── body.css
    │       │   ├── layout.css
    │       │   └── reset.css
    │       └── .cursor/
    │           └── rules/
    │               └── design-system.md
    ├── types/
    │   ├── conversation.ts
    │   ├── file-manifest.ts
    │   └── sandbox.ts
    └── utils/
        ├── cn.ts
        ├── init-canvas.ts
        ├── set-timeout-on-visible.ts
        └── sleep.ts
