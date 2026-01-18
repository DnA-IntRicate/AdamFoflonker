import subprocess
import sys


def serve_site(port: int = 8000, open_browser: bool = False):
    dev_addr = f"localhost:{port}"
    subprocess.run([sys.executable, "-m", "zensical", "serve", "-a", dev_addr, "-o" if open_browser else ""])

if __name__ == "__main__":
    try:
        # NOTE: Windows is stubborn as hell so port 8000 typically doesn't work due to permissions
        serve_site(8080, True)
    except KeyboardInterrupt:
        print("Stopping server...")

    input("\nPress Enter to continue...")
