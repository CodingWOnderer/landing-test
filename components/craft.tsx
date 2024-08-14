import * as React from "react";

// cn util
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Layout Component
type LayoutProps = {
    children: React.ReactNode;
    className?: string;
};

const Layout = ({ children, className }: LayoutProps) => {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn("scroll-smooth antialiased focus:scroll-auto", className)}
        >
            {children}
        </html>
    );
};

// Main Component
type MainProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
};

const Main = ({ children, className, id }: MainProps) => {
    return (
        <main
            className={cn(
                // `Main` Specific Styles
                "max-w-none prose-p:m-0",
                // General Prose
                "prose:font-sans prose prose-neutral dark:prose-invert xl:prose-lg",
                // Prose Headings
                "prose-headings:font-normal",
                // Prose Strong
                "prose-strong:font-semibold",
                // Inline Links
                "prose-a:text-foreground/75 prose-a:underline prose-a:decoration-primary/50 prose-a:underline-offset-2 prose-a:transition-all",
                // Inline Link Hover
                "hover:prose-a:text-foreground hover:prose-a:decoration-primary",
                // Blockquotes
                "prose-blockquote:not-italic",
                // Pre and Code Blocks
                "prose-pre:border prose-pre:bg-muted/25 prose-pre:text-foreground",
                className,
            )}
            id={id}
        >
            {children}
        </main>
    );
};

// Section Component
type SectionProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
};

const Section = ({ children, className, id }: SectionProps) => {
    return (
        <section className={cn("py-8 md:py-12", className)} id={id}>
            {children}
        </section>
    );
};

// Container Component
type ContainerProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
};

const Container = ({ children, className, id }: ContainerProps) => {
    return (
        <div className={cn("mx-auto max-w-5xl", "p-6 sm:p-8", className)} id={id}>
            {children}
        </div>
    );
};

// Article Component
type ArticleProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
};

const Article = ({ children, className, id }: ArticleProps) => {
    return (
        <article
            className={cn(
                // General Prose
                "prose:font-sans prose prose-neutral max-w-none prose-invert",
                // Prose Headings
                "prose-headings:font-normal",
                // Prose Paragraphs
                "prose-p:mb-0",
                // Prose Strong
                "prose-strong:font-semibold",
                // Prose Images
                "prose-img: prose-img:m-0",
                // Inline Links
                "prose-a:text-foreground/75 prose-a:underline prose-a:decoration-primary/50 prose-a:underline-offset-2 prose-a:transition-all",
                // Inline Link Hover
                "hover:prose-a:text-foreground hover:prose-a:decoration-primary",
                // Blockquotes
                "prose-blockquote:not-italic",
                // Pre and Code Blocks
                "prose-pre:border prose-pre:bg-muted/25",
                className,
            )}
            id={id}
        >
            {children}
        </article>
    );
};


interface TextProps {
    className?: string;
    children: React.ReactNode;
}

const Prose: React.FunctionComponent<TextProps> = ({ className, children }) => {
    return (
        <div
            className={clsx(
                'prose mx-auto max-w-6xl  text-base leading-7 text-white prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-white prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-white prose-a:underline hover:prose-a:text-neutral-300 prose-strong:text-white prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 dark:text-white dark:prose-headings:text-white dark:prose-a:text-white dark:prose-strong:text-white',
                className
            )}

        >{children}</div>
    );
};

export { Layout, Main, Section, Container, Article, Prose };