import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Composability',
    emoji: '🧩',
    description: (
      <>
        Anda agents specialize in solving domain-specific problems and can flexibly combine with other agents to tackle complex tasks. When a single agent cannot solve a problem alone, it collaborates with others to form a robust problem-solving network. This modular design allows Anda to adapt to diverse needs.
      </>
    ),
  },
  {
    title: 'Simplicity',
    emoji: '🚀',
    description: (
      <>
        Anda emphasizes simplicity and ease of use, enabling developers to quickly build powerful and efficient agents. Non-developers can also create their own agents through simple configurations, lowering the technical barrier and inviting broader participation in agent development and application.
      </>
    ),
  },
  {
    title: 'Autonomy',
    emoji: '🤖',
    description: (
      <>
        Anda agents derive permanent identities and cryptographic capabilities from the ICP blockchain, combined with the reasoning and decision-making abilities of large language models (LLMs). This allows agents to autonomously and efficiently solve problems based on their experiences and knowledge, adapting to dynamic environments and making effective decisions in complex scenarios.
      </>
    ),
  },
  {
    title: 'Perpetual Memory',
    emoji: '🧠',
    description: (
      <>
        The memory states of Anda agents are stored on the ICP blockchain and within the trusted storage network of dTEE, ensuring continuous algorithm upgrades, knowledge accumulation, and evolution. This perpetual memory mechanism enables agents to operate indefinitely, even achieving "immortality", laying the foundation for a super AGI system.
      </>
    ),
  },
  {
    title: 'Trustworthiness',
    emoji: '🔒',
    description: (
      <>
        Anda agents operate within a decentralized trusted execution environment (dTEE) based on Trusted Execution Environments (TEEs), ensuring security, privacy, and data integrity. This architecture provides a highly reliable infrastructure for agent operations, safeguarding data and computational processes.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className="margin-top--md">
      <Heading as="h3"><span className={styles.emoji}>{emoji}</span>{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
