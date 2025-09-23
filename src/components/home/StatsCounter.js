import { memo, useMemo } from "react";
import PropTypes from "prop-types";

// Configuration for transition delays
const TRANSITION_DELAYS = {
  years: '0ms',
  compliance: '200ms',
  support: '400ms',
  clients: '600ms'
};

// Reusable StatItem component for better maintainability
const StatItem = memo(({
  value,
  label,
  suffix = '',
  delay,
  isVisible
}) => {
  const transitionClass = useMemo(() =>
    `transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
    [isVisible]
  );

  return (
    <article
      className={transitionClass}
      style={{ transitionDelay: delay }}
      aria-label={`${value}${suffix} ${label}`}
      aria-hidden={!isVisible}
      data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        {typeof value === 'number' ? value.toLocaleString() : value}{suffix}
      </div>
      <p className="text-sm sm:text-base text-primary-100">{label}</p>
    </article>
  );
});

StatItem.displayName = 'StatItem';

StatItem.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  delay: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired
};

const StatsCounter = ({
  yearsCounter = {},
  complianceCounter = {},
  supportCounter = {},
  clientsCounter = {},
  statsVisible = false
}) => {
  // Memoize stats data to prevent unnecessary recalculations
  const statsData = useMemo(() => [
    {
      key: 'years',
      value: yearsCounter.count || 0,
      label: 'Years Experience',
      suffix: '+',
      delay: TRANSITION_DELAYS.years
    },
    {
      key: 'compliance',
      value: complianceCounter.count || 0,
      label: 'Compliance Rate',
      suffix: '%',
      delay: TRANSITION_DELAYS.compliance
    },
    {
      key: 'support',
      value: supportCounter.count || 0,
      label: 'Hour Support',
      suffix: '/7',
      delay: TRANSITION_DELAYS.support
    },
    {
      key: 'clients',
      value: clientsCounter.count || 0,
      label: 'Satisfied Clients',
      suffix: '+',
      delay: TRANSITION_DELAYS.clients
    }
  ], [yearsCounter.count, complianceCounter.count, supportCounter.count, clientsCounter.count]);

  return (
    <section
      className="py-12 md:py-16 bg-primary-600 text-white"
      aria-label="Company Statistics"
      data-testid="stats-counter"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {statsData.map((stat) => (
            <StatItem
              key={stat.key}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={stat.delay}
              isVisible={statsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

StatsCounter.propTypes = {
  yearsCounter: PropTypes.shape({
    count: PropTypes.number
  }),
  complianceCounter: PropTypes.shape({
    count: PropTypes.number
  }),
  supportCounter: PropTypes.shape({
    count: PropTypes.number
  }),
  clientsCounter: PropTypes.shape({
    count: PropTypes.number
  }),
  statsVisible: PropTypes.bool
};

export default memo(StatsCounter);