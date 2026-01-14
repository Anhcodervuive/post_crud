import Image from 'next/image'

export default function ImageDemoPage() {
    return (
        <div style={{ padding: 24 }}>
            <h1>Next.js Image Optimization Demo</h1>

            <Image
                src="https://picsum.photos/600/400"
                alt="Mock image from picsum"
                width={600}
                height={400}
            />
        </div>
    )
}
