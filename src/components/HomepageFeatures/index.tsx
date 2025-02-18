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
        Anda agents specialize in solving domain-specific problems and can flexibly combine with other agents to tackle complex tasks.
      </>
    ),
  },
  {
    title: 'Simplicity',
    emoji: '🚀',
    description: (
      <>
        Anda emphasizes simplicity and ease of use, enabling developers to quickly build powerful and efficient agents. Non-developers can also create their own agents through simple configurations.
      </>
    ),
  },
  {
    title: 'Autonomy',
    emoji: '🤖',
    description: (
      <>
        Anda agents derive permanent identities and cryptographic capabilities from the ICP blockchain, combined with the reasoning and decision-making abilities of large language models (LLMs).
      </>
    ),
  },
  {
    title: 'Perpetual Memory',
    emoji: '🧠',
    description: (
      <>
        The memory states of Anda agents are stored on the ICP blockchain and within the trusted storage network of dTEE, ensuring continuous algorithm upgrades, knowledge accumulation, and evolution.
      </>
    ),
  },
  {
    title: 'Trustworthiness',
    emoji: '🔒',
    description: (
      <>
        Anda agents operate within a decentralized trusted execution environment (dTEE) based on Trusted Execution Environments (TEEs), ensuring security, privacy, and data integrity.
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
