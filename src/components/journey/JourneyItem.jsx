const statusConfig = {
  completed: {
    dot: "bg-green-500",
    badge: "bg-green-500/10 text-green-600 dark:text-green-400",
    label: "Completed",
  },

  "in-progress": {
    dot: "bg-blue-500",
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    label: "In Progress",
  },

  planned: {
    dot: "bg-amber-500",
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    label: "Planned",
  },

  vision: {
    dot: "bg-primary",
    badge: "bg-primary/10 text-primary",
    label: "Vision",
  },
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function JourneyItem({ item, isLast }) {
  const config = statusConfig[item.status];

  return (
    <div className="relative flex gap-6">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <span
          className={cn(
            "h-4 w-4 rounded-full border-4 border-background",
            config.dot,
          )}
        />

        {!isLast && <span className="mt-2 h-full w-px bg-border" />}
      </div>

      {/* Card */}
      <div className="mb-10 flex-1 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium",
              config.badge,
            )}
          >
            {config.label}
          </span>

          <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
            {item.category}
          </span>

          {item.focus && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {item.focus}
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold">{item.title}</h3>

        <p className="mt-3 leading-7 text-muted-foreground">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default JourneyItem;
