type Callback = (...args: any[]) => any;

interface Callbacks {
  [namespace: string]: {
    [eventName: string]: Callback[];
  };
}

interface ResolvedName {
  original: string;
  value: string;
  namespace: string;
}

export default class EventEmitter {
  private callbacks: Callbacks;

  constructor() {
    this.callbacks = {};
    this.callbacks.base = {};
  }

  public on(names: string, callback: Callback): this {
    const resolvedNames = this.resolveNames(names);

    resolvedNames.forEach((name) => {
      const resolvedName = this.resolveName(name);

      if (!this.callbacks[resolvedName.namespace]) {
        this.callbacks[resolvedName.namespace] = {};
      }

      if (!this.callbacks[resolvedName.namespace][resolvedName.value]) {
        this.callbacks[resolvedName.namespace][resolvedName.value] = [];
      }

      this.callbacks[resolvedName.namespace][resolvedName.value].push(callback);
    });

    return this;
  }

  public off(names: string): this {
    const resolvedNames = this.resolveNames(names);

    resolvedNames.forEach((name) => {
      const resolvedName = this.resolveName(name);

      if (resolvedName.namespace !== "base" && resolvedName.value === "") {
        delete this.callbacks[resolvedName.namespace];
      } else {
        if (resolvedName.namespace === "base") {
          for (const namespace in this.callbacks) {
            if (
              this.callbacks[namespace] &&
              this.callbacks[namespace][resolvedName.value]
            ) {
              delete this.callbacks[namespace][resolvedName.value];

              if (Object.keys(this.callbacks[namespace]).length === 0) {
                delete this.callbacks[namespace];
              }
            }
          }
        } else if (
          this.callbacks[resolvedName.namespace] &&
          this.callbacks[resolvedName.namespace][resolvedName.value]
        ) {
          delete this.callbacks[resolvedName.namespace][resolvedName.value];

          if (
            Object.keys(this.callbacks[resolvedName.namespace]).length === 0
          ) {
            delete this.callbacks[resolvedName.namespace];
          }
        }
      }
    });

    return this;
  }

  public trigger(name: string, args: any[] = []): any {
    let finalResult: any = null;

    const resolvedNames = this.resolveNames(name);
    const resolvedName = this.resolveName(resolvedNames[0]);

    if (resolvedName.namespace === "base") {
      for (const namespace in this.callbacks) {
        if (
          this.callbacks[namespace] &&
          this.callbacks[namespace][resolvedName.value]
        ) {
          this.callbacks[namespace][resolvedName.value].forEach((callback) => {
            const result = callback.apply(this, args);
            if (finalResult === undefined) {
              finalResult = result;
            }
          });
        }
      }
    } else if (
      this.callbacks[resolvedName.namespace] &&
      this.callbacks[resolvedName.namespace][resolvedName.value]
    ) {
      this.callbacks[resolvedName.namespace][resolvedName.value].forEach(
        (callback) => {
          const result = callback.apply(this, args);
          if (finalResult === undefined) {
            finalResult = result;
          }
        }
      );
    }

    return finalResult;
  }

  private resolveNames(names: string): string[] {
    let resolvedNames = names;
    resolvedNames = resolvedNames.replace(/[^a-zA-Z0-9 ,/.]/g, "");
    resolvedNames = resolvedNames.replace(/[,/]+/g, " ");
    return resolvedNames.split(" ");
  }

  private resolveName(name: string): ResolvedName {
    const resolvedName: ResolvedName = {
      original: name,
      value: "",
      namespace: "base",
    };
    const parts = name.split(".");

    resolvedName.value = parts[0];

    if (parts.length > 1 && parts[1] !== "") {
      resolvedName.namespace = parts[1];
    }

    return resolvedName;
  }
}
