"use client";

import React from "react";
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { LazyImage } from "@/components/lazy-image";
import type { Photo } from "@/lib/content";
import { cn } from "@/lib/utils";

export type GalleryPhoto = Photo & { alt: string; caption?: string };

type ImageGalleryProps = {
	photos: GalleryPhoto[];
	/** Number of masonry columns at the widest breakpoint. default: 3 */
	columns?: 2 | 3 | 4;
	className?: string;
};

const columnClasses = {
	2: "sm:grid-cols-2",
	3: "sm:grid-cols-2 md:grid-cols-3",
	4: "sm:grid-cols-2 md:grid-cols-4",
};

/** Greedily place each photo in the currently shortest column so columns stay balanced. */
function distribute(photos: GalleryPhoto[], columns: number) {
	const cols: { items: { photo: GalleryPhoto; index: number }[]; height: number }[] =
		Array.from({ length: columns }, () => ({ items: [], height: 0 }));
	photos.forEach((photo, index) => {
		const shortest = cols.reduce((a, b) => (b.height < a.height ? b : a));
		shortest.items.push({ photo, index });
		shortest.height += photo.height / photo.width;
	});
	return cols.map((c) => c.items);
}

export function ImageGallery({ photos, columns = 3, className }: ImageGalleryProps) {
	const [active, setActive] = React.useState<number | null>(null);
	const dialogRef = React.useRef<HTMLDialogElement>(null);
	const cols = React.useMemo(() => distribute(photos, columns), [photos, columns]);

	const open = (index: number) => {
		setActive(index);
		dialogRef.current?.showModal();
	};
	const close = () => dialogRef.current?.close();
	const step = React.useCallback(
		(dir: 1 | -1) =>
			setActive((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
		[photos.length]
	);

	const current = active === null ? null : photos[active];

	return (
		<div className={cn("w-full", className)}>
			<div className={cn("grid grid-cols-1 gap-8 md:gap-10", columnClasses[columns])}>
				{cols.map((items, col) => (
					<div className="grid content-start gap-8 md:gap-10" key={col}>
						{items.map(({ photo, index }) => (
							<figure className="group" key={photo.src}>
								<button
									aria-label={`View ${photo.alt}`}
									className="mat block w-full cursor-zoom-in transition-transform duration-500 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
									onClick={() => open(index)}
									type="button"
								>
									<LazyImage
										alt={photo.alt}
										containerClassName="rounded-none border-0"
										inView={true}
										ratio={photo.width / photo.height}
										src={photo.thumb}
									/>
								</button>
								{photo.caption && (
									<figcaption className="mt-4 text-center font-serif text-lg text-muted-foreground italic">
										{photo.caption}
									</figcaption>
								)}
							</figure>
						))}
					</div>
				))}
			</div>

			<dialog
				aria-label="Image viewer"
				className="m-auto h-dvh max-h-none w-dvw max-w-none bg-transparent p-0 backdrop:bg-[oklch(0.2_0.015_50/0.96)]"
				onClick={(e) => e.target === e.currentTarget && close()}
				onClose={() => setActive(null)}
				onKeyDown={(e) => {
					if (e.key === "ArrowRight") step(1);
					if (e.key === "ArrowLeft") step(-1);
				}}
				ref={dialogRef}
			>
				{current && (
					<div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4 sm:p-10" onClick={(e) => e.target === e.currentTarget && close()}>
						{/* biome-ignore lint/correctness/useImageSize: dimensions vary per photo */}
						<img
							alt={current.alt}
							className="max-h-[80dvh] w-auto max-w-full bg-white object-contain p-2 sm:p-3"
							height={current.height}
							src={current.src}
							width={current.width}
						/>
						{current.caption && <p className="text-center font-serif text-xl text-white/85 italic">{current.caption}</p>}
						<button aria-label="Close" className="absolute top-4 right-4 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white" onClick={close} type="button">
							<XIcon className="size-6" />
						</button>
						{photos.length > 1 && (
							<>
								<button aria-label="Previous image" className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white sm:left-4" onClick={() => step(-1)} type="button">
									<ChevronLeftIcon className="size-7" />
								</button>
								<button aria-label="Next image" className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white sm:right-4" onClick={() => step(1)} type="button">
									<ChevronRightIcon className="size-7" />
								</button>
							</>
						)}
					</div>
				)}
			</dialog>
		</div>
	);
}
