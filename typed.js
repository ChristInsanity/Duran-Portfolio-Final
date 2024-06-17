(function (global, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        (global || self).Typed = factory();
    }
}(this, function () {
    class Typed {
        constructor(element, options) {
            this.el = typeof element === 'string' ? document.querySelector(element) : element;
            this.options = options || {};
            this.strings = this.options.strings || [];
            this.loop = typeof this.options.loop !== 'undefined' ? this.options.loop : true;
            this.loopCount = this.options.loopCount || Infinity;
            this.typeSpeed = this.options.typeSpeed || 10;
            this.startDelay = this.options.startDelay || 5;
            this.backSpeed = this.options.backSpeed || 20;
            this.backDelay = this.options.backDelay || 1500;
            this.contentType = this.options.contentType || 'html';
            this.showCursor = typeof this.options.showCursor !== 'undefined' ? this.options.showCursor : true;
            this.cursorChar = this.options.cursorChar || '|';
            this.cursorBlinking = true;
            this.isPaused = false;
            this.currentIdx = 0;
            this.typingComplete = false;
            this.timeout = null;

            this.appendCursorAnimationCss();
            this.typewrite();
        }

        typewrite() {
            if (this.isPaused) return;

            let str = this.strings[this.currentIdx];
            let curStrPos = 0;

            setTimeout(() => {
                if (!this.isPaused) {
                    this.timeout = setInterval(() => {
                        if (curStrPos <= str.length) {
                            this.replaceText(str.substr(0, curStrPos));
                            curStrPos++;
                        } else {
                            clearInterval(this.timeout);
                            this.timeout = setTimeout(() => {
                                this.backspace();
                            }, this.backDelay);
                        }
                    }, this.typeSpeed);
                }
            }, this.startDelay);
        }

        backspace() {
            if (!this.isPaused) {
                let str = this.strings[this.currentIdx];
                let curStrPos = str.length;

                setTimeout(() => {
                    this.timeout = setInterval(() => {
                        if (curStrPos >= 0) {
                            this.replaceText(str.substr(0, curStrPos));
                            curStrPos--;
                        } else {
                            clearInterval(this.timeout);
                            this.currentIdx = (this.currentIdx + 1) % this.strings.length;
                            setTimeout(() => {
                                this.typewrite();
                            }, this.startDelay);
                        }
                    }, this.backSpeed);
                }, this.backDelay);
            }
        }

        replaceText(str) {
            if (this.contentType === 'html') {
                this.el.innerHTML = str;
            } else {
                this.el.textContent = str;
            }
        }

        appendCursorAnimationCss() {
            if (this.showCursor && !document.querySelector('[data-typed-js-cursor-css]')) {
                const style = document.createElement('style');
                style.setAttribute('data-typed-js-cursor-css', true);
                style.innerHTML = `
                    .typed-cursor {
                        opacity: 1;
                    }
                    .typed-cursor.typed-cursor--blink {
                        animation: typedjsBlink 0.7s infinite;
                    }
                    @keyframes typedjsBlink {
                        50% { opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
            }
        }

        toggle() {
            this.isPaused = !this.isPaused;
        }

        reset() {
            clearInterval(this.timeout);
            this.replaceText('');
            this.currentIdx = 0;
            this.typingComplete = false;
            this.typewrite();
        }

        destroy() {
            clearInterval(this.timeout);
            this.replaceText('');
        }
    }

    return Typed;
}));
