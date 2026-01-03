export type Context =
  | "slow-network"
  | "low-battery"
  | "impatient"
  | "new-user";

type Strategy = {
  conditions: Context[];
  actions: () => void;
};

export class AdaptiveUI {
  private context = new Set<Context>();
  private strategies: Strategy[] = [];

  addContext(ctx: Context) {
    this.context.add(ctx);
  }

  has(ctx: Context) {
    return this.context.has(ctx);
  }

  strategy(strategy: Strategy) {
    this.strategies.push(strategy);
  }

  run() {
    for (const s of this.strategies) {
      if (s.conditions.every(c => this.context.has(c))) {
        s.actions();
      }
    }
  }

  explain() {
    return {
      context: Array.from(this.context),
      strategies: this.strategies.length,
    };
  }
}
