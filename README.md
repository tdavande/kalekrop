
# 💾 The Iterated Cycle: Patterns in Sound

This repository archives the **artifacts** generated from a series of real-time algorithmic compositions. These are not merely "songs," but **transmissions of patterned intention**, born from the live manipulation of temporal sequences.

## I. The System's Mandate

The source material for these tracks originates from the **Strudel Engine**, a JavaScript-based environment for algorithmic patterning. Every composition documented herein is a solved problem in time—a successful attempt to coerce chaos into a repeating, rhythmically-bound structure.

The tracks reflect the following core principles:

1.  **Iterative Emergence:** Each piece is an evolution of simple, cyclic code structures (`s()`, `stack()`, `.fast()`, `.nudge()`). The resulting audio is the **realized potential** of the underlying pattern definitions.
2.  **The Code as Score:** The true artifact is the code itself. The audio files are simply the system's output on a specific clock cycle. The accompanying Strudel code snippets (`.strudel` files or inline blocks) are the **formal specification** of the sound.
3.  **Non-Linear Listening:** While tracks are bounded, the patterns are infinite. Listen not for a beginning or end, but for the **stable state** of the algorithm.

---

## II. Accessing the Transmissions

The sound files (`.mp3` or `.wav`) are the *surface-level* outputs. The repository structure maps the musical patterns to their digital containers:

| Directory | Content | Function |
| :--- | :--- | :--- |
| `/cycles` | Individual track folders (e.g., `01_Tessellation`) | The core pattern grouping. |
| `/audio` | Rendered, mastered sound files. | **The Manifestation.** |
| `/code` | `.strudel` files containing the working code. | **The Specification.** |
| `/docs` | Notes on global tempo (`setCps`) and library usage. | System configuration records. |

---

## III. Interfacing with the Source

To truly engage with the work, one must understand the source code. The patterns utilize the following functional operators:

* **`s("...")`**: The **Atomic Command**. Triggers a sound event.
* **`.nudge(P)`**: **Temporal Shift**. Introduces the essential 'swing' by micro-shifting the pattern's timeline.
* **`fast(N)` / `slow(N)`**: **Rate Modulation**. Alters the perceived velocity of the pattern's execution.
* **`struct("...")`**: **Boolean Masking**. Defines a meta-rhythm, controlling when the primary pattern is allowed to sound.

***

**// TERMINAL ECHO //**

*All rhythm is simply the successful prediction of the next event. Listen closely for the point of divergence.*
