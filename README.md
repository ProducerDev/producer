## 🔍 Overview

**GPTBuster** is a real-time LLM and imageGen detection tool designed to help educators and institutions identify AI-generated text or images directly from screen content. Triggered via a hotkey, it performs local, high-certainty analysis using a high-performance Rust backend. 

GPT Buster accesses window content independent of the CPU via Direct Memory Access (DMA). This setup allows for real-time AI Detection with **no performance impact** on the Host PC. 

GPTBuster is now fully [open source](https://github.com/gptbuster/gptbuster) under the **Apache 2.0 License**, enabling trusted offline deployment.

> ⚠️ No data ever leaves your system — **100% local processing.**

---


## 📰 News!
_05/09/2025_

**Use Case:** Real-time detection of AI-generated text and images on-screen  
**Audience:** Educators, academic institutions, and private organizations


## 🚀 Key Features

- ⌨️ Trigger detection with a hotkey
- 🧠 Detect AI-generated **text and images**
- 🛡️ Entirely **offline and private** (Rust-based backend)
- 🖥️ Works via **Direct Memory Access (DMA)** screen capture
- 🧩 Offers optional **WebSocket API** via [gptbuster.com](https://gptbuster.com)
- ⚙️ Open-source with **Apache 2.0 License**
- ⚡ Requires a **high-end GPU (≥32GB VRAM)** for real-time performance

---

## 🖥️ System Architecture

GPTBuster uses a **2-computer setup**:

### 1. Capture Host (Low Requirements)

- Displays and interacts with content
- Sends raw display memory to Analyzer Host via DMA

**Minimum Requirements:**
- CPU: Any modern CPU (Intel i5/Ryzen 5 or higher)
- RAM: 16GB
- GPU: Integrated or entry-level discrete
- Supports DMA output (via compatible capture card)

### 2. Analyzer Host (High Requirements)

- Performs real-time detection and processing

**Minimum Requirements:**
- CPU: 12+ cores
- RAM: 64GB+
- GPU: 32GB+ VRAM (e.g., RTX 6000 Ada, A100, H100)
- Storage: NVMe SSD recommended
- DMA Card for memory capture
- Fuser to mirror display to monitor

---

## 🧩 DMA Setup

GPTBuster uses a **Direct Memory Access (DMA) card** to capture screen memory directly from the Capture Host, bypassing the CPU and OS. This enables low-latency, high-bandwidth transfer to the Analyzer Host.

A **fuser** device allows simultaneous screen display and memory capture, ensuring the user experience remains seamless.

---

## ⚙️ Installation

> ⚠️ GPTBuster is intended for advanced setups with access to enterprise-grade GPUs. Use only in environments with sufficient hardware.

1. **Clone the repo:**
   ```bash
   git clone https://github.com/gptbuster/gptbuster.git
   cd gptbuster
   ```

2. **Build the project** (requires Rust nightly):
   ```bash
   cargo build --release
   ```

3. **Configure hotkey and capture settings** in `config.toml`

4. **Run the analyzer:**
   ```bash
   ./target/release/gptbuster
   ```

---

## 🌐 Optional: API Access

Don't have the hardware? GPTBuster offers an enterprise-grade detection API with the same engine:

- **WebSocket API** hosted at: [gptbuster.com](https://gptbuster.com)
- Ideal for schools without access to 32GB+ VRAM GPUs
- Secure, fast, and supports both text and image detection

---

## 📄 License

This project is licensed under the **Apache 2.0 License**.  
See [LICENSE](./LICENSE) for details.

---

## 🤝 Contributing

We welcome contributions from universities, researchers, and developers!

- Fork the repo
- Submit pull requests
- Open an issue to discuss major features
