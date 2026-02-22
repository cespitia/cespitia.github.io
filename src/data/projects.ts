export type ProjectTag =
  | ".NET"
  | "C#"
  | "ASP.NET MVC"
  | "Web API"
  | "EF Core"
  | "SQL Server"
  | "IIS"
  | "Azure"
  | "Blazor Server"
  | "React"
  | "Vue"
  | "GitHub"
  | "Docs"
  | "jQuery";

export type ProjectLink = {
  label: "GitHub" | "Live Demo" | "API Docs" | "Screenshots" | "Readme";
  url: string;
};

export type Project = {
  id: "service-desk" | "inventory-api" | "ops-dashboard" | "repopulse";
  title: string;
  subtitle: string;
  oneLiner: string;
  tags: ProjectTag[];
  status: "Planned" | "In Progress" | "MVP Done";
  highlights: string[];
  tech: string[];
  architecture: string;
  deployment: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "service-desk",
    title: "Service Desk Lite",
    subtitle: "ASP.NET Core MVC ticketing MVP",
    oneLiner:
      "Internal MVC app to create, assign, and track tickets with a normalized SQL Server schema.",
    tags: ["ASP.NET MVC", "C#", ".NET", "EF Core", "SQL Server", "IIS", "jQuery", "GitHub", "Docs"],
    status: "Planned",
    highlights: [
      "Tickets CRUD with status + category normalization (3NF-friendly design)",
      "Search + filters (status/category) and validation",
      "One jQuery UX improvement (inline status update or modal edit)",
      "IIS publish profile and environment-based connection strings"
    ],
    tech: ["ASP.NET Core MVC", "EF Core", "SQL Server", "Razor", "jQuery", "IIS"],
    architecture: "MVC web app → EF Core → SQL Server",
    deployment: "Local IIS (screenshots) or Windows VM IIS",
    links: [
      { label: "GitHub", url: "https://github.com/cespitia/service-desk-lite" },
      { label: "Readme", url: "https://github.com/cespitia/service-desk-lite#readme" }
    ]
  },
  {
    id: "inventory-api",
    title: "Inventory API + SPA",
    subtitle: "Service-oriented API with React client",
    oneLiner:
      "ASP.NET Core Web API with Swagger plus a lightweight React SPA for inventory browsing and edits.",
    tags: ["Web API", "C#", ".NET", "EF Core", "SQL Server", "Azure", "React", "GitHub", "Docs"],
    status: "Planned",
    highlights: [
      "REST endpoints: list/get/create/update with consistent error responses",
      "Swagger/OpenAPI enabled and documented request/response examples",
      "React client consumes API with loading and error states",
      "Deployed API to Azure App Service (config via environment variables)"
    ],
    tech: ["ASP.NET Core Web API", "Swagger", "EF Core", "SQL Server/Azure SQL", "React"],
    architecture: "React SPA → Web API → SQL Server/Azure SQL",
    deployment: "Azure App Service for API; SPA local or static hosting",
    links: [
      { label: "GitHub", url: "https://github.com/cespitia/inventory-api-spa" },
      { label: "API Docs", url: "https://<YOUR_AZURE_APP>.azurewebsites.net/swagger" }
    ]
  },
  {
    id: "ops-dashboard",
    title: "Ops Dashboard",
    subtitle: "Blazor Server reliability dashboard MVP",
    oneLiner:
      "Blazor Server dashboard showing service statuses and event logs backed by SQL Server.",
    tags: ["Blazor Server", "C#", ".NET", "EF Core", "SQL Server", "GitHub", "Docs"],
    status: "Planned",
    highlights: [
      "Dashboard page shows services with health state and last check time",
      "Event log page stores and displays recent events from DB",
      "‘Run Check’ action simulates checks and writes results to DB",
      "Optional: BackgroundService heartbeat or HealthChecks endpoint"
    ],
    tech: ["Blazor Server", "EF Core", "SQL Server"],
    architecture: "Blazor Server → EF Core → SQL Server",
    deployment: "Local run (optional Azure later)",
    links: [{ label: "GitHub", url: "https://github.com/cespitia/blazor-ops-dashboard" }]
  },
  {
    id: "repopulse",
    title: "RepoPulse",
    subtitle: "C# console app + GitHub API + SQL",
    oneLiner:
      "CLI that pulls repo activity from GitHub API, stores it in SQL Server, and generates an HTML report.",
    tags: ["C#", ".NET", "SQL Server", "GitHub", "Docs"],
    status: "Planned",
    highlights: [
      "CLI inputs: owner/repo and days range (default 7)",
      "Fetch commits via GitHub API and persist in normalized tables",
      "Generate report.html with totals and latest activity",
      "Handles rate limits with friendly errors and simple backoff"
    ],
    tech: [".NET Console", "GitHub REST API", "SQL Server"],
    architecture: "CLI → GitHub API + SQL Server → HTML report artifact",
    deployment: "Local run; optional GitHub Actions nightly run",
    links: [{ label: "GitHub", url: "https://github.com/cespitia/repopulse" }]
  }
];