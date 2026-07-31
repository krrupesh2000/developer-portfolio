const statusConfig = {
  completed: {
    dot: 'bg-green-500',
    badge: 'bg-green-500/10 text-green-600 dark:text-green-400',
    label: 'Completed',
  },

  'in-progress': {
    dot: 'bg-blue-500',
    badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    label: 'In Progress',
  },

  planned: {
    dot: 'bg-amber-500',
    badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    label: 'Planned',
  },
};

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function JourneyItem({ item, isLast }) {
  const config = statusConfig[item.status];

  return (
    <div className="relative flex gap-5 lg:gap-6">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <span
          className={cn(
            'h-3.5 w-3.5 rounded-full border-[3px] border-background transition-colors duration-300',
            config.dot,
          )}
        />

        {!isLast && <span className="mt-2 h-full w-px bg-border/70" />}
      </div>

      {/* Card */}
      <div
        className="
          mb-6
          flex-1
          rounded-2xl
          border
          border-border
          bg-card
          p-3
          transition-all
          duration-300
          ease-out
          hover:-translate-y-1
          hover:border-primary/30
          hover:shadow-md
          lg:p-4
        "
      >
        {/* Badges */}
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
          <span
            className={cn(
              'type-badge rounded-full px-2.5 py-1 font-medium',
              config.badge,
            )}
          >
            {config.label}
          </span>

          <span className="type-badge rounded-full bg-muted px-2.5 py-1 text-muted-foreground">
            {item.category}
          </span>

          {item.focus && (
            <span className="type-badge rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">
              {item.focus}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="type-card-title text-center font-semibold lg:text-left">
          {item.title}
        </h3>

        {/* Description */}
        <p className="type-small mt-2 text-center text-muted-foreground lg:text-left">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default JourneyItem;
