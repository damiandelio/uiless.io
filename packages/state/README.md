# State

**State** is a framework agnostic state management library designed for modern JavaScript and TypeScript applications. Currently in its **alpha** stage, the library is under active development and not yet stable for production use.

## ⚠️ Important Notice

- This package is in **alpha**. Features, APIs, and behavior are subject to significant changes without notice.
- Use at your own risk in non-critical projects or for testing purposes.

## 📦 Installation

To install the package, use the following command:

```bash
npm install @uiless.io/state
```

## 📚 Documentation

The official documentation is available at [state.uiless.io](https://state.uiless.io/).

Please refer to it for:

- API references
- Examples and guides
- Common pitfalls and FAQs

## 🔧 Basic Usage

Below is a quick example to help you get started:

```javascript
import { State } from '@uiless.io/state';

export class Counter extends State {
  constructor(initialValue) {
    super(initialValue); // Initial state
  }

  increase = () => {
    this.update((prev) => prev + 1);
  };

  decrease = () => {
    this.update((prev) => prev - 1);
  };
}

const counter = new Counter(0);

// Subscribe to state changes
counter.subscribe(() => {
  console.log(`Counter updated: ${counter.state}`);
});

// Update state
counter.increase();
```

For detailed examples, check out the [documentation](https://state.uiless.io/).

## 🛠️ Contributing

Contributions, feedback, and bug reports are welcome! Please note that the project is in alpha, and contributions might be delayed until the core APIs stabilize.

## 📜 License

This package is licensed under the [MIT License](https://github.com/damiandelio/uiless.io/blob/main/LICENSE.md).

Stay updated on the latest developments by visiting [state.uiless.io](https://state.uiless.io/).
