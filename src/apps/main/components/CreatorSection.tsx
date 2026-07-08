import { motion } from "motion/react";
import { Youtube, Sparkles, Users, PlayCircle, TrendingUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { IframeDialog } from "@/components/IframeDialog";
import imgCharacter1 from "@/assets/hqdefault.png";
import imgCharacter2 from "@/assets/hqdefault2.png";
import imgCharacter3 from "@/assets/hqdefault3.png";

type CreatorVideo = {
  id: string;
  videoId: string;
  title: string;
  thumbnail: string;
};

type ChannelStats = {
  subscribers: string;
  videos: string;
  views: string;
};

type ChannelSummary = {
  id: string;
  title: string;
  uploadsPlaylistId: string;
  customUrl?: string;
  statistics?: {
    subscriberCount?: string;
    videoCount?: string;
    viewCount?: string;
  };
};

type YtChannelsResponse = {
  items?: Array<{
    id?: string;
    snippet?: { title?: string; customUrl?: string };
    statistics?: { subscriberCount?: string; videoCount?: string; viewCount?: string };
    contentDetails?: { relatedPlaylists?: { uploads?: string } };
  }>;
};

type YtSearchResponse = {
  items?: Array<{
    snippet?: { channelId?: string };
  }>;
};

type YtPlaylistResponse = {
  items?: Array<{
    id?: string;
    contentDetails?: { videoId?: string };
    snippet?: {
      title?: string;
      thumbnails?: {
        maxres?: { url?: string };
        high?: { url?: string };
        medium?: { url?: string };
        standard?: { url?: string };
        default?: { url?: string };
      };
    };
  }>;
};

const YT_API_BASE = "https://www.googleapis.com/youtube/v3";
const YT_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY as string | undefined;
const YT_CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID as string | undefined;
const YT_CHANNEL_HANDLE = (import.meta.env.VITE_YOUTUBE_CHANNEL_HANDLE as string | undefined) || "codingskuy";

const FALLBACK_CHANNEL_LINK = "https://www.youtube.com/@codingskuy/videos";

const FALLBACK_VIDEOS: CreatorVideo[] = [
  { id: "fallback-1", videoId: "s2OFRR2ZCPc", title: "CodingSkuy Video", thumbnail: imgCharacter1 },
  { id: "fallback-2", videoId: "M7lc1UVf-VE", title: "CodingSkuy Video", thumbnail: imgCharacter2 },
  { id: "fallback-3", videoId: "rfscVS0vtbw", title: "CodingSkuy Video", thumbnail: imgCharacter3 },
  { id: "fallback-4", videoId: "s2OFRR2ZCPc", title: "CodingSkuy Video", thumbnail: imgCharacter1 },
];

const copy: Record<Language, {
  sectionTitle: string;
  subtitle: string;
  description: string;
  subscribers: string;
  videos: string;
  views: string;
  joinText: string;
  subscribe: string;
  coverAlt: string;
  characterAlt: string;
  watchNow: string;
  loadingVideo: string;
  openInTab: string;
  searchPlaceholder: string;
  searchEmpty: string;
}> = {
  id: {
    sectionTitle: "CodingSkuy!",
    subtitle: "Dokumentasi & Repositori Pembelajaran Engineering",
    description: "CodingSkuy bukanlah fokus bisnis utama atau startup komersial. Platform ini murni merupakan jurnal engineering pribadi dan kontribusi komunitas gratis untuk mendokumentasikan proses belajar, menulis tutorial, serta membagikan keputusan engineering agar mudah dipahami.",
    subscribers: "Pembelajar",
    videos: "Catatan Jurnal",
    views: "Total Tayangan",
    joinText: "Bergabung dengan ribuan developer yang belajar bersama repositori terbuka ini!",
    subscribe: "Kunjungi Jurnal Video",
    coverAlt: "Jurnal Pembelajaran CodingSkuy",
    characterAlt: "Karakter CodingSkuy",
    watchNow: "Tonton Catatan",
    loadingVideo: "Memuat jurnal...",
    openInTab: "Buka Tab",
    searchPlaceholder: "Cari topik...",
    searchEmpty: "Topik tidak ditemukan.",
  },
  en: {
    sectionTitle: "CodingSkuy!",
    subtitle: "Engineering Learning Journal & Knowledge Hub",
    description: "CodingSkuy is not a startup or commercial side-hustle. It is purely an open engineering journal and free community contribution built to document my learning process, write technical tutorials, and share design decisions in an approachable way.",
    subscribers: "Learners",
    videos: "Journal Records",
    views: "Total Views",
    joinText: "Join thousands of developers learning with this open knowledge hub!",
    subscribe: "Visit Video Journal",
    coverAlt: "CodingSkuy Learning Journal",
    characterAlt: "CodingSkuy Character",
    watchNow: "Watch Record",
    loadingVideo: "Loading journal...",
    openInTab: "Open Tab",
    searchPlaceholder: "Search topics...",
    searchEmpty: "No topics found.",
  },
  zh: {
    sectionTitle: "CodingSkuy!",
    subtitle: "工程学习日志与知识库",
    description: "CodingSkuy 不是商业项目或创业公司。它纯粹是一个开放的工程日志和免费的社区贡献，旨在记录我的学习过程、编写技术教程并以通俗易懂的方式分享设计决策。",
    subscribers: "学习者",
    videos: "日志视频",
    views: "总观看量",
    joinText: "与上千名开发者一起在这个开放知识库中共同学习！",
    subscribe: "访问视频日志",
    coverAlt: "CodingSkuy 学习日志",
    characterAlt: "CodingSkuy 角色",
    watchNow: "观看记录",
    loadingVideo: "正在加载日志...",
    openInTab: "新标签打开",
    searchPlaceholder: "搜索主题...",
    searchEmpty: "未找到主题。",
  },
  ja: {
    sectionTitle: "CodingSkuy!",
    subtitle: "エンジニアリング学習ジャーナル & ナレッジハブ",
    description: "CodingSkuy はスタートアップや商用サイドビジネスではありません。自身の学習プロセスのドキュメント化、技術チュートリアルの執筆、設計上の意思決定を分かりやすく共有するための、完全なオープンエンジニアリングジャーナルであり無料のコミュニティ貢献活動です。",
    subscribers: "学習者",
    videos: "ジャーナル記録",
    views: "総再生数",
    joinText: "このオープンナレッジハブを通じて何千人もの開発者と共に学ぼう！",
    subscribe: "ビデオジャーナルを見る",
    coverAlt: "CodingSkuy 学習ジャーナル",
    characterAlt: "CodingSkuy キャラクター",
    watchNow: "記録を再生",
    loadingVideo: "ジャーナルを読み込み中...",
    openInTab: "新しいタブで開く",
    searchPlaceholder: "トピックを検索...",
    searchEmpty: "トピックが見つかりません。",
  },
};

function toYouTubeWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

function toYouTubeEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
}

function pickThumbnail(item: YtPlaylistResponse["items"][number], fallback: string) {
  const thumbs = item?.snippet?.thumbnails;
  return (
    thumbs?.maxres?.url ||
    thumbs?.high?.url ||
    thumbs?.standard?.url ||
    thumbs?.medium?.url ||
    thumbs?.default?.url ||
    fallback
  );
}

function localeByLanguage(language: Language) {
  if (language === "id") return "id-ID";
  if (language === "zh") return "zh-CN";
  if (language === "ja") return "ja-JP";
  return "en-US";
}

function formatCompactCount(value: string | undefined, language: Language) {
  const number = Number(value || 0);
  if (!Number.isFinite(number) || number <= 0) return "0";

  return new Intl.NumberFormat(localeByLanguage(language), {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(number);
}

async function ytFetch<T>(path: string, params: Record<string, string>) {
  if (!YT_API_KEY) throw new Error("Missing VITE_YOUTUBE_API_KEY");

  const url = new URL(`${YT_API_BASE}/${path}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value);
  });
  url.searchParams.set("key", YT_API_KEY);

  const response = await fetch(url.toString(), { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`YouTube API ${response.status}`);
  }

  return (await response.json()) as T;
}

function normalizeHandle(value: string) {
  return value.replace(/^@/, "").trim();
}

async function resolveChannelSummary(): Promise<ChannelSummary | null> {
  const byId = async () => {
    if (!YT_CHANNEL_ID) return null;
    const data = await ytFetch<YtChannelsResponse>("channels", {
      part: "snippet,statistics,contentDetails",
      id: YT_CHANNEL_ID,
      maxResults: "1",
    });
    return data.items?.[0] || null;
  };

  const byHandle = async () => {
    const handle = normalizeHandle(YT_CHANNEL_HANDLE);
    if (!handle) return null;

    const data = await ytFetch<YtChannelsResponse>("channels", {
      part: "snippet,statistics,contentDetails",
      forHandle: handle,
      maxResults: "1",
    });
    return data.items?.[0] || null;
  };

  const bySearch = async () => {
    const query = normalizeHandle(YT_CHANNEL_HANDLE) || "codingskuy";
    const found = await ytFetch<YtSearchResponse>("search", {
      part: "snippet",
      q: query,
      type: "channel",
      maxResults: "1",
    });

    const channelId = found.items?.[0]?.snippet?.channelId;
    if (!channelId) return null;

    const channel = await ytFetch<YtChannelsResponse>("channels", {
      part: "snippet,statistics,contentDetails",
      id: channelId,
      maxResults: "1",
    });

    return channel.items?.[0] || null;
  };

  const channel = (await byId()) || (await byHandle()) || (await bySearch());
  if (!channel?.id || !channel.contentDetails?.relatedPlaylists?.uploads) return null;

  return {
    id: channel.id,
    title: channel.snippet?.title || "CodingSkuy",
    uploadsPlaylistId: channel.contentDetails.relatedPlaylists.uploads,
    customUrl: channel.snippet?.customUrl,
    statistics: channel.statistics,
  };
}

async function fetchLatestVideos(uploadsPlaylistId: string): Promise<CreatorVideo[]> {
  const data = await ytFetch<YtPlaylistResponse>("playlistItems", {
    part: "snippet,contentDetails",
    playlistId: uploadsPlaylistId,
    maxResults: "20",
  });

  const fallbackImages = [imgCharacter1, imgCharacter2, imgCharacter3, imgCharacter1];

  return (data.items || [])
    .filter((item) => {
      const videoId = item.contentDetails?.videoId;
      const title = item.snippet?.title || "";
      return Boolean(videoId) && title !== "Private video" && title !== "Deleted video";
    })
    .map((item, index) => ({
      id: item.id || `yt-${index}`,
      videoId: item.contentDetails?.videoId || "",
      title: item.snippet?.title || "CodingSkuy Video",
      thumbnail: pickThumbnail(item, fallbackImages[index % fallbackImages.length]),
    }))
    .filter((item) => Boolean(item.videoId));
}

export function CreatorSection() {
  const { language } = useLanguage();
  const text = copy[language];

  const [videos, setVideos] = useState<CreatorVideo[]>(FALLBACK_VIDEOS);
  const [channelTitle, setChannelTitle] = useState("CodingSkuy");
  const [channelUrl, setChannelUrl] = useState(FALLBACK_CHANNEL_LINK);
  const [stats, setStats] = useState<ChannelStats>({
    subscribers: "10K+",
    videos: "100+",
    views: "50K+",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [activeVideo, setActiveVideo] = useState<{ title: string; embedUrl: string; watchUrl: string } | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef<{ isDown: boolean; startX: number; scrollLeft: number; moved: boolean }>({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });
  const suppressClickUntilRef = useRef(0);

  useEffect(() => {
    let mounted = true;

    const loadYoutubeData = async () => {
      if (!YT_API_KEY) return;

      try {
        const channel = await resolveChannelSummary();
        if (!channel) return;

        const latestVideos = await fetchLatestVideos(channel.uploadsPlaylistId);
        if (!mounted) return;

        if (latestVideos.length > 0) {
          setVideos(latestVideos);
        }

        setChannelTitle(channel.title || "CodingSkuy");
        setChannelUrl(
          channel.customUrl
            ? `https://www.youtube.com/${channel.customUrl.startsWith("@") ? channel.customUrl : `@${channel.customUrl}`}/videos`
            : `https://www.youtube.com/channel/${channel.id}/videos`,
        );

        setStats({
          subscribers: formatCompactCount(channel.statistics?.subscriberCount, language),
          videos: formatCompactCount(channel.statistics?.videoCount, language),
          views: formatCompactCount(channel.statistics?.viewCount, language),
        });
      } catch {
        if (!mounted) return;
      }
    };

    loadYoutubeData();
    return () => {
      mounted = false;
    };
  }, [language]);

  const filteredVideos = useMemo(() => {
    if (!searchQuery) return videos;
    const lowerQ = searchQuery.toLowerCase();
    return videos.filter((v) => v.title.toLowerCase().includes(lowerQ));
  }, [videos, searchQuery]);

  const featuredVideo = filteredVideos[0] || FALLBACK_VIDEOS[0];

  const showcaseVideos = useMemo(() => {
    const fromLatest = filteredVideos.slice(1);
    if (searchQuery) return fromLatest;
    if (fromLatest.length >= 4) return fromLatest;
    const needed = Math.max(4 - fromLatest.length, 0);
    return [...fromLatest, ...FALLBACK_VIDEOS.slice(0, needed)];
  }, [filteredVideos, searchQuery]);

  const onTrackPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    dragStateRef.current = {
      isDown: true,
      startX: event.clientX,
      scrollLeft: el.scrollLeft,
      moved: false,
    };
    el.setPointerCapture(event.pointerId);
    el.classList.add("is-dragging");
  };

  const onTrackPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    const drag = dragStateRef.current;
    if (!el || !drag.isDown) return;
    const delta = event.clientX - drag.startX;
    if (Math.abs(delta) > 6) dragStateRef.current.moved = true;
    el.scrollLeft = drag.scrollLeft - delta;
  };

  const onTrackPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    if (dragStateRef.current.moved) {
      suppressClickUntilRef.current = Date.now() + 140;
    }
    dragStateRef.current.isDown = false;
    el.releasePointerCapture(event.pointerId);
    el.classList.remove("is-dragging");
  };

  return (
    <section id="content" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnpNNDQgNDR2Mi0yem0wLTMwdjItMnptLTIwLTIwdjItMnpNMiAydjItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />

        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <Youtube className="w-12 h-12 text-red-500 mx-auto mb-4" />
          </motion.div>

          <h2 className="text-4xl sm:text-6xl text-white">{text.sectionTitle}</h2>

          <div className="space-y-3">
            <p className="text-xl sm:text-2xl text-cyan-200">{text.subtitle}</p>
          </div>

          <p className="text-slate-300 max-w-2xl mx-auto">
            {text.description}
          </p>
        </motion.div>

        {videos.length > 0 && (
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-white/50" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-3 border border-white/20 rounded-full bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-colors backdrop-blur-sm"
                placeholder={text.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        )}

        {filteredVideos.length === 0 && searchQuery && (
          <p className="text-center text-slate-300 mb-16">{text.searchEmpty}</p>
        )}

        {filteredVideos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
          <button
            type="button"
            className="w-full relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group cursor-pointer"
            onClick={() =>
              setActiveVideo({
                title: featuredVideo.title,
                embedUrl: toYouTubeEmbedUrl(featuredVideo.videoId),
                watchUrl: toYouTubeWatchUrl(featuredVideo.videoId),
              })
            }
          >
            <img
              src={featuredVideo.thumbnail}
              alt={text.coverAlt}
              className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-2xl"
              >
                <PlayCircle className="w-16 h-16 text-white fill-current" />
              </motion.div>
            </div>

            <div className="absolute left-4 right-4 bottom-4 text-left">
              <p className="text-white text-sm sm:text-base line-clamp-2">{featuredVideo.title}</p>
            </div>

            <motion.div
              animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-8 left-8"
            >
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
              className="absolute top-8 right-8"
            >
              <Sparkles className="w-8 h-8 text-cyan-400" />
            </motion.div>
          </button>
        </motion.div>
        )}

        {showcaseVideos.length > 0 && (
          <div className="mb-16">
          <div
            ref={trackRef}
            className="overflow-x-auto pb-3 creator-manual-scroll snap-x snap-mandatory cursor-grab select-none"
            onPointerDown={onTrackPointerDown}
            onPointerMove={onTrackPointerMove}
            onPointerUp={onTrackPointerUp}
            onPointerCancel={onTrackPointerUp}
          >
            <div className="flex w-max gap-0">
              {showcaseVideos.map((video, index) => (
                <motion.button
                  type="button"
                  key={`${video.id}-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="relative text-left shrink-0 w-[290px] sm:w-[330px] mx-3 snap-start"
                  onClick={() => {
                    if (Date.now() < suppressClickUntilRef.current) return;
                    setActiveVideo({
                      title: video.title,
                      embedUrl: toYouTubeEmbedUrl(video.videoId),
                      watchUrl: toYouTubeWatchUrl(video.videoId),
                    });
                  }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-white/40 transition-colors h-full">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={video.thumbnail}
                        alt={`${text.characterAlt} ${index + 1}`}
                        className="w-full h-auto min-h-[180px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                      <div className="absolute left-3 right-3 bottom-3 flex items-center justify-between gap-2">
                        <p className="text-sm text-white line-clamp-2 leading-snug">{video.title}</p>
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/30 bg-black/40 px-2 py-1 text-[11px] text-white shrink-0">
                          <PlayCircle className="w-3.5 h-3.5" />
                          {text.watchNow}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
          >
            <Users className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
            <p className="text-3xl text-white mb-1">{stats.subscribers}</p>
            <p className="text-slate-300">{text.subscribers}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
          >
            <PlayCircle className="w-10 h-10 text-blue-300 mx-auto mb-3" />
            <p className="text-3xl text-white mb-1">{stats.videos}</p>
            <p className="text-slate-300">{text.videos}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
          >
            <TrendingUp className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
            <p className="text-3xl text-white mb-1">{stats.views}</p>
            <p className="text-slate-300">{text.views}</p>
          </motion.div>
        </div>

        {/* === SPECTACULAR CTA CARD === */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-24"
        >
          {/* Soft fluid glow backdrop — no hard edges */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-16 rounded-full bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-pink-500/20 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -inset-20 rounded-full bg-gradient-to-l from-indigo-500/15 via-fuchsia-500/15 to-cyan-400/15 blur-[80px]"
          />
          <div className="relative rounded-[2rem] bg-gradient-to-br from-slate-900/90 via-[#0a1628]/90 to-slate-900/90 backdrop-blur-sm border border-white/[0.06] p-10 sm:p-16">
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30 - i * 10, 0],
                  x: [0, (i % 2 === 0 ? 1 : -1) * 15, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: ["#6366f1", "#06b6d4", "#a855f7", "#ec4899", "#f59e0b", "#10b981"][i],
                  top: `${15 + i * 12}%`,
                  left: `${10 + (i % 2 === 0 ? 1 : -1) * 20 + i * 5}%`,
                  boxShadow: `0 0 12px 4px ${["#6366f1", "#06b6d4", "#a855f7", "#ec4899", "#f59e0b", "#10b981"][i]}66`,
                }}
              />
            ))}

            {/* Sparkle decorations */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-6 right-12 text-3xl"
            >
              ✦
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, -180, -360], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
              className="absolute bottom-8 left-10 text-2xl"
            >
              ✦
            </motion.div>

            <div className="relative z-10 text-center space-y-8">
              {/* Shimmer headline */}
              <motion.h3
                initial={{ backgroundPosition: "200% center" }}
                animate={{ backgroundPosition: "-200% center" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(90deg,#6366f1,#06b6d4,#a855f7,#ec4899,#6366f1)] bg-[length:300%_auto]"
              >
                📚 Why CodingSkuy Exists
              </motion.h3>

              <p className="text-slate-300 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
                CodingSkuy exists purely as an engineering documentation playground. It is an open-source hub where I solidify my learning by teaching others, documenting real-world software architecture, and contributing back to the developer community.
              </p>

              {/* Divider */}
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/50" />
                <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Engineering Journal</span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500/50" />
              </div>

              {/* Big CTA button group */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white group"
                  onClick={() => window.open(channelUrl, "_blank")}
                >
                  <Youtube className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  {text.subscribe}
                </Button>

                <motion.a
                  href="/#/codingskuy"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-bold text-white overflow-hidden group cursor-pointer"
                >
                  {/* Pulsing background layers */}
                  <motion.span
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-500"
                  />
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-60 blur-md"
                  />
                  {/* Glow ring */}
                  <motion.span
                    animate={{ opacity: [0, 1, 0], scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 rounded-xl ring-2 ring-purple-400/60"
                  />
                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-3">
                    <motion.span
                      animate={{ rotate: [0, 20, -20, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="inline-block text-2xl"
                    >
                      🚀
                    </motion.span>
                    <span className="relative">
                      Explore CodingSkuy
                      <motion.span
                        animate={{ width: ["0%", "100%"] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.5 }}
                        className="absolute -bottom-1 left-0 h-0.5 bg-white rounded-full"
                      />
                    </span>
                    <motion.span
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.a>
              </div>

              {/* Social proof microcopy */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm text-slate-500"
              >
                ⚡ Open journal — free & accessible to everyone
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

      <IframeDialog
        open={Boolean(activeVideo)}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) setActiveVideo(null);
        }}
        title={activeVideo?.title || ""}
        description={channelTitle}
        url={activeVideo?.embedUrl || "about:blank"}
        externalUrl={activeVideo?.watchUrl}
        openLabel={text.openInTab}
        loadingLabel={text.loadingVideo}
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
      />
    </section>
  );
}
