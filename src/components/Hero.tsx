import {
    ArrowRight,
    CheckCircle,
    Sparkles,
    Smartphone,
} from 'lucide-react'
import {DemoPreview} from "./DemoPreview.tsx";

export function Hero() {
    return (
        <section
            className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-secondary-700 text-white py-24 px-4">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div
                    className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full opacity-5 animate-bounce-slow"></div>
                <div
                    className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400 rounded-full opacity-10 animate-bounce-slow"
                    style={{animationDelay: '1s'}}></div>
                <div
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary-500 rounded-full opacity-10 animate-bounce-slow"
                    style={{animationDelay: '2s'}}></div>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8 animate-fade-in">
                    <div className="flex flex-wrap gap-4">
                        <div
                            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                            <Sparkles className="w-4 h-4 mr-2 text-yellow-300"/>
                            <span>New: AI-powered product descriptions</span>
                        </div>
                        <div
                            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                            <Smartphone className="w-4 h-4 mr-2 text-blue-300"/>
                            <span>Try our interactive demo</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Launch Your Online Store in <span className="text-yellow-300">10 Minutes</span>
                    </h1>

                    <p className="text-xl text-primary-100 max-w-lg">
                        Transform your Instagram page or small business into a professional online shop - no technical
                        skills needed
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <button
                            className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-full transition-all shadow-soft flex items-center">
                            Start Selling Online
                            <ArrowRight className="ml-2 w-5 h-5"/>
                        </button>
                        <button
                            className="bg-transparent border-2 border-white/30 hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all">
                            Watch Demo
                        </button>
                    </div>

                    <div className="flex items-center space-x-6 text-sm">
                        <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 mr-2 text-green-400"/>
                            <span>Free 14-day trial</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 mr-2 text-green-400"/>
                            <span>No credit card required</span>
                        </div>
                    </div>
                </div>
                <DemoPreview/>
            </div>
        </section>
    )
}
