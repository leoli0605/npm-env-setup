# One Line Command to Setup Your New Computer

[![build](https://github.com/DinosauriaLab/npm-env-setup/actions/workflows/build.yml/badge.svg)](https://github.com/DinosauriaLab/npm-env-setup/actions/workflows/build.yml)
[![test](https://github.com/DinosauriaLab/npm-env-setup/actions/workflows/test.yml/badge.svg)](https://github.com/DinosauriaLab/npm-env-setup/actions/workflows/test.yml)
[![GitHub Release](https://img.shields.io/github/v/release/DinosauriaLab/npm-env-setup)](https://github.com/DinosauriaLab/npm-env-setup/releases/latest)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Table of Contents</summary>

- [Usage](#usage)
  - [Windows](#windows)
  - [MacOS](#macos)
  - [Linux (Ubuntu 18.04 LTS and later)](#linux-ubuntu-1804-lts-and-later)
- [Features](#features)
  - [Windows Software List](#windows-software-list)
  - [MacOS Software List](#macos-software-list)
  - [Linux Software List](#linux-software-list)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

This project offers a streamlined solution for setting up a brand new computer using just a command line interface (CLI). With an interactive CLI approach, it automates the installation and configuration of your computer, allowing you to customize the software and settings you need swiftly and efficiently. This tool is designed to get you up and running on your new machine without the hassle, covering everything from essential software installations to environment setups.

![](docs/cover.jpeg)

## Usage

Here’s how you can use this tool to set up your computer quickly and easily. Simply follow the instructions for your computer's operating system. No need to worry about the technical terms like "x86" or "arm64"; we've got you covered with straightforward instructions for every type of computer.

### Windows

Open `powershell` and run the following command. This will start setting up your computer with all the essential software and configurations:

<!-- WINDOWS_LINK_X64_START -->
```shell
powershell.exe -Command "Invoke-WebRequest -Uri https://github.com/leoli0605/npm-env-setup/releases/download/v1.2.4/env-setup-win-x64.exe -OutFile env-setup-win-x64.exe; Start-Process env-setup-win-x64.exe -Wait; Remove-Item env-setup-win-x64.exe -Force"
```
<!-- WINDOWS_LINK_X64_END -->

### MacOS

For Mac users, the process is just as simple. Depending on the type of chip your Mac has, follow the instructions below:

- If you have an older Mac model (typically before 2020):

<!-- MACOS_LINK_X64_START -->
```shell
curl -L https://github.com/leoli0605/npm-env-setup/releases/download/v1.2.4/env-setup-macos-x64 -o env-setup-macos-x64 && chmod +x env-setup-macos-x64 && ./env-setup-macos-x64 && rm -f env-setup-macos-x64
```
<!-- MACOS_LINK_X64_END -->

- If you have a newer Mac model with Apple's own chip (like the M1 or M2, found in Macs from late 2020 onwards):

<!-- MACOS_LINK_ARM64_START -->
```shell
curl -L https://github.com/leoli0605/npm-env-setup/releases/download/v1.2.4/env-setup-macos-arm64 -o env-setup-macos-arm64 && chmod +x env-setup-macos-arm64 && ./env-setup-macos-arm64 && rm -f env-setup-macos-arm64
```
<!-- MACOS_LINK_ARM64_END -->

### Linux (Ubuntu 18.04 LTS and later)

For Linux users running Ubuntu 18.04 LTS or newer versions, execute the following command in your terminal. This will prepare your system with the necessary software for a smooth start:

<!-- LINUX_LINK_X64_START -->
```shell
curl -L https://github.com/leoli0605/npm-env-setup/releases/download/v1.2.4/env-setup-linux-x64 -o env-setup-linux-x64 && chmod +x env-setup-linux-x64 && ./env-setup-linux-x64 && rm -f env-setup-linux-x64
```
<!-- LINUX_LINK_X64_END -->

## Features

This setup tool uses friendly software installers like [Chocolatey](https://community.chocolatey.org/) for Windows, [Homebrew](https://brew.sh/) for MacOS, and `apt` for Linux systems to get your software up and running. For MacOS and Linux users, an added benefit is the integration of [asdf](https://asdf-vm.com/) as a version manager for programming languages like [Node.js](https://nodejs.org/) and [Python](https://www.python.org/). This means you can easily manage and switch between different versions of these languages, ensuring compatibility and flexibility across various projects.

Additionally, it sets up some useful programming tools and utilities, ensuring that you’re ready to tackle any project right from the start.

### Windows Software List

<!-- WINDOWS_LISTS_START -->

| Package                      | Description                                                                                        | Default    |
|------------------------------|----------------------------------------------------------------------------------------------------|------------|
| Android Studio               | -                                                                                                  | disable    |
| Beyond Compare               | 用來做檔案差異比較的 GUI 軟體                                                                      | **enable** |
| CMake                        | 跨平台的建構系統產生工具                                                                           | disable    |
| Cuda                         | 控制 NVIDIA GPU 的 CLI 工具                                                                        | disable    |
| DevToys                      | 開發者工具集合，包含了許多常用的開發者工具                                                          | disable    |
| Docker                       | 虛擬化容器工具，會同時安裝 docker & docker-compose                                                  | **enable** |
| FileZilla                    | 免費的 FTP 用戶端軟體                                                                              | disable    |
| Flutter                      | -                                                                                                  | disable    |
| Git                          | -                                                                                                  | `force`    |
| Golang                       | -                                                                                                  | **enable** |
| ImageJ                       | 基於 Java 的圖像處理軟體                                                                           | **enable** |
| KiCad                        | 繪製電路原理圖和印刷電路板設計的自由軟體                                                           | disable    |
| LINQPad 7                    | 一款強大的 .NET 程式碼編輯器                                                                       | **enable** |
| Miniconda 3                  | -                                                                                                  | disable    |
| MobaXTerm                    | 終端機工具，類似於 PuTTY                                                                            | **enable** |
| Node.js                      | -                                                                                                  | `force`    |
| Pandoc                       | 文件轉換工具                                                                                       | **enable** |
| PuTTY                        | -                                                                                                  | **enable** |
| PySide6                      | -                                                                                                  | disable    |
| Python                       | -                                                                                                  | `force`    |
| Rust                         | -                                                                                                  | `force`    |
| Setuptools                   | Python tool that helps you easily download, build, install, upgrade, and uninstall Python packages | disable    |
| Sourcetree                   | Git GUI 軟體                                                                                       | disable    |
| Sublime Text 4               | 高效、多功能的文本編輯器                                                                            | **enable** |
| Tera Term                    | -                                                                                                  | disable    |
| TypeScript                   | -                                                                                                  | **enable** |
| VSCode Extension Development | VSCode 擴充套件開發工具                                                                            | **enable** |
| Virtual Box                  | 自由及開放原始碼的虛擬機器軟體                                                                     | **enable** |
| Visual Studio 2022 Community | -                                                                                                  | disable    |
| Visual Studio Code           | -                                                                                                  | **enable** |
| act-cli                      | GitHub Actions 的本地模擬工具                                                                      | disable    |
| commitizen                   | Git Commit 規範工具                                                                                | **enable** |
| dotnet-sdk                   | -                                                                                                  | **enable** |
| gcc                          | C / C++ 編譯器                                                                                     | **enable** |
| gcc-arm-none-eabi            | ARM 編譯器                                                                                         | **enable** |
| ilspy                        | C# 反編譯工具                                                                                      | **enable** |
| lazydocker                   | 一個簡單的終端機使用者介面，適用於 docker 與 docker-compose                                         | **enable** |
| make                         | -                                                                                                  | **enable** |
| pyOCD                        | Python OpenOCD                                                                                     | **enable** |
| usbipd-win                   | USB over IP 的 Windows 版本                                                                        | **enable** |
| 7-Zip                        | 壓縮/解壓縮軟體                                                                                    | disable    |
| Adobe Reader                 | PDF 閱讀器                                                                                         | disable    |
| Anydesk                      | 遠端桌面軟體                                                                                       | **enable** |
| Bandizip                     | 好看的壓縮程式                                                                                     | **enable** |
| CPU-Z                        | CPU 資訊檢視工具                                                                                   | disable    |
| CrystalDiskMark              | 硬碟效能檢測工具                                                                                   | disable    |
| Discord                      | -                                                                                                  | **enable** |
| Everything                   | 免費 Windows 搜尋引擎，且比 Windows 內建的搜尋功能快上許多                                          | **enable** |
| Fira Code                    | 好看的程式碼字型                                                                                   | `force`    |
| Folder Size                  | 資料夾大小檢視工具                                                                                 | disable    |
| Google Drive                 | -                                                                                                  | **enable** |
| Hugo                         | 靜態網站產生器                                                                                     | **enable** |
| Inkscape                     | 免費向量繪圖軟體，類似 Adobe Illustrator                                                            | disable    |
| Keyviz                       | 按鍵可視化工具，它可以實時顯示用戶當前按下的按鍵。                                                   | **enable** |
| Krita                        | 免費的數位繪圖軟體，類似 Adobe Photoshop                                                            | disable    |
| Logi Options+                | -                                                                                                  | disable    |
| Mega Downloader              | Mega.nz 下載器                                                                                     | disable    |
| Notion                       | -                                                                                                  | disable    |
| OBS Studio                   | 開源的串流軟體                                                                                     | **enable** |
| PDF24                        | PDF 處理軟體                                                                                       | disable    |
| PotPlayer                    | -                                                                                                  | **enable** |
| PowerToys                    | Windows 10 / 11 的實用小工具                                                                       | **enable** |
| QuickLook                    | 類似於 macOS 的快速預覽工具                                                                        | **enable** |
| Revo Uninstaller             | Windows 的軟體卸載工具                                                                             | **enable** |
| Spotify                      | -                                                                                                  | **enable** |
| Telegram                     | -                                                                                                  | **enable** |
| VLC                          | -                                                                                                  | disable    |
| ffmepg                       | 影片處理 CLI 工具                                                                                  | **enable** |
| yt-dlp                       | YouTube 影片下載 CLI 工具                                                                          | **enable** |
<!-- WINDOWS_LISTS_END -->

### MacOS Software List

<!-- MACOS_LISTS_START -->

| Package                      | Description                                                                                        | Default    |
|------------------------------|----------------------------------------------------------------------------------------------------|------------|
| Android Studio               | -                                                                                                  | disable    |
| Beyond Compare               | 用來做檔案差異比較的 GUI 軟體                                                                      | **enable** |
| CMake                        | 跨平台的建構系統產生工具                                                                           | disable    |
| Docker                       | 虛擬化容器工具，會同時安裝 docker & docker-compose                                                  | **enable** |
| Flutter                      | -                                                                                                  | disable    |
| Git                          | -                                                                                                  | `force`    |
| Golang                       | -                                                                                                  | **enable** |
| KiCad                        | 繪製電路原理圖和印刷電路板設計的自由軟體                                                           | disable    |
| Node.js                      | -                                                                                                  | `force`    |
| Pandoc                       | 文件轉換工具                                                                                       | **enable** |
| PySide6                      | -                                                                                                  | disable    |
| Python                       | -                                                                                                  | `force`    |
| Rust                         | -                                                                                                  | `force`    |
| Setuptools                   | Python tool that helps you easily download, build, install, upgrade, and uninstall Python packages | disable    |
| Sourcetree                   | Git GUI 軟體                                                                                       | disable    |
| TypeScript                   | -                                                                                                  | **enable** |
| VSCode Extension Development | VSCode 擴充套件開發工具                                                                            | **enable** |
| Visual Studio Code           | -                                                                                                  | **enable** |
| act-cli                      | GitHub Actions 的本地模擬工具                                                                      | disable    |
| commitizen                   | Git Commit 規範工具                                                                                | **enable** |
| dotnet-sdk                   | -                                                                                                  | **enable** |
| gcc-arm-none-eabi            | ARM 編譯器                                                                                         | **enable** |
| lazydocker                   | 一個簡單的終端機使用者介面，適用於 docker 與 docker-compose                                         | **enable** |
| lazygit                      | 一個簡單的終端機使用者介面，適用於 git                                                              | **enable** |
| make                         | -                                                                                                  | **enable** |
| minicom                      | Linux/Unix 系統的終端機通訊程式                                                                    | **enable** |
| pyOCD                        | Python OpenOCD                                                                                     | **enable** |
| 7-Zip                        | 壓縮/解壓縮軟體                                                                                    | disable    |
| Adobe Creative Cloud         | Adobe 軟體管理工具                                                                                 | **enable** |
| Adobe Reader                 | PDF 閱讀器                                                                                         | disable    |
| Anydesk                      | 遠端桌面軟體                                                                                       | **enable** |
| Discord                      | -                                                                                                  | **enable** |
| Fira Code                    | 好看的程式碼字型                                                                                   | `force`    |
| Google Drive                 | -                                                                                                  | **enable** |
| Hugo                         | 靜態網站產生器                                                                                     | **enable** |
| IINA                         | macOS 的影片播放器                                                                                 | **enable** |
| Ice                          | Ice is a powerful menu bar management tool for macOS                                               | **enable** |
| Inkscape                     | 免費向量繪圖軟體，類似 Adobe Illustrator                                                            | disable    |
| Krita                        | 免費的數位繪圖軟體，類似 Adobe Photoshop                                                            | disable    |
| Logi Options+                | -                                                                                                  | disable    |
| Logitech G HUB               | -                                                                                                  | **enable** |
| Microsoft Edge               | -                                                                                                  | **enable** |
| Notion                       | -                                                                                                  | disable    |
| OBS Studio                   | 開源的串流軟體                                                                                     | **enable** |
| Rclone                       | 雲端檔案同步工具                                                                                   | disable    |
| Spotify                      | -                                                                                                  | **enable** |
| Telegram                     | -                                                                                                  | **enable** |
| The Unarchiver               | macOS 的壓縮/解壓縮軟體                                                                            | **enable** |
| VLC                          | -                                                                                                  | disable    |
| ffmepg                       | 影片處理 CLI 工具                                                                                  | **enable** |
| stats                        | macOS system monitor in your menu bar                                                              | **enable** |
| ttc-source-han-serif         | 思源宋體                                                                                           | **enable** |
| yt-dlp                       | YouTube 影片下載 CLI 工具                                                                          | **enable** |
<!-- MACOS_LISTS_END -->

### Linux Software List

<!-- LINUX_LISTS_START -->

| Package                      | Description                                                                                        | Default    |
|------------------------------|----------------------------------------------------------------------------------------------------|------------|
| CMake                        | 跨平台的建構系統產生工具                                                                           | disable    |
| Docker                       | 虛擬化容器工具，會同時安裝 docker & docker-compose                                                  | **enable** |
| Flutter                      | -                                                                                                  | disable    |
| Git                          | -                                                                                                  | `force`    |
| Golang                       | -                                                                                                  | **enable** |
| KiCad                        | 繪製電路原理圖和印刷電路板設計的自由軟體                                                           | disable    |
| Node.js                      | -                                                                                                  | `force`    |
| OpenSSH                      | -                                                                                                  | **enable** |
| Pandoc                       | 文件轉換工具                                                                                       | **enable** |
| PySide6                      | -                                                                                                  | disable    |
| Python                       | -                                                                                                  | `force`    |
| Rust                         | -                                                                                                  | `force`    |
| Setuptools                   | Python tool that helps you easily download, build, install, upgrade, and uninstall Python packages | disable    |
| TypeScript                   | -                                                                                                  | **enable** |
| VSCode Extension Development | VSCode 擴充套件開發工具                                                                            | **enable** |
| act-cli                      | GitHub Actions 的本地模擬工具                                                                      | disable    |
| commitizen                   | Git Commit 規範工具                                                                                | **enable** |
| dotnet-sdk                   | -                                                                                                  | **enable** |
| gcc-arm-none-eabi            | ARM 編譯器                                                                                         | **enable** |
| lazydocker                   | 一個簡單的終端機使用者介面，適用於 docker 與 docker-compose                                         | **enable** |
| lazygit                      | 一個簡單的終端機使用者介面，適用於 git                                                              | **enable** |
| make                         | -                                                                                                  | **enable** |
| minicom                      | Linux/Unix 系統的終端機通訊程式                                                                    | **enable** |
| pyOCD                        | Python OpenOCD                                                                                     | **enable** |
| Hugo                         | 靜態網站產生器                                                                                     | **enable** |
| Inkscape                     | 免費向量繪圖軟體，類似 Adobe Illustrator                                                            | disable    |
| Noto Sans CJK                | Google 開發的中文字型                                                                              | **enable** |
| OBS Studio                   | 開源的串流軟體                                                                                     | **enable** |
| ffmepg                       | 影片處理 CLI 工具                                                                                  | **enable** |
| yt-dlp                       | YouTube 影片下載 CLI 工具                                                                          | **enable** |
<!-- LINUX_LISTS_END -->

This approach demystifies the setup process, making it more accessible to general users. It ensures that anyone, regardless of their technical skill level, can easily set up their new computer with everything they need to get started. The emphasis on a user-friendly, interactive CLI experience ensures that users can personalize their setup process to match their specific needs, all through a single command line.
