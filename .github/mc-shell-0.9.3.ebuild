# Copyright 2026 Gentoo Authors
# Distributed under the terms of the GNU General Public License v2

EAPI=8

# Explicitly set the backend to match the project's pyproject.toml
DISTUTILS_USE_PEP517=poetry
PYTHON_COMPAT=( python3_{10..12} )

inherit distutils-r1 pypi

DESCRIPTION="Blockly-based programming interface for Minecraft automation"
HOMEPAGE="https://pypi.org/project/mc-shell/"

LICENSE="MIT"
SLOT="0"
KEYWORDS="~amd64"

# I/O mapping: You must map the runtime dependencies from pyproject.toml 
# to their corresponding Gentoo packages here.
RDEPEND="
	# e.g., dev-python/requests[${PYTHON_USEDEP}]
mctools = "^1.4.1"
pexpect = "*"
flask = "*"
flask-cors = "*"
flask-socketio = "*"
python-socketio = {version = "*", extras = ["client"]}
requests = "*"
numpy = "*"
pyyaml = "^6.0.2"
yarl = "==1.20.1"
beautifulsoup4 = "*"
asyncssh = "^2.22.0"
miniupnpc = "^2.3.3"
psutil = "^7.2.2"
blockapily = "^0.3.1"

# IPython Shell Dependencies
ipython = "*"
pickleshare = "*" # For %store magic
rich = "*"
click = "*" # For the mcshell CLI entry point

pytest = "^9.0.2"


"

# Automatically wires up `src_test` to run your pytest suite
distutils_enable_tests pytest